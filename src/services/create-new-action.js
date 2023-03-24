import { container } from '../config/container.js'
import util from 'util'

export default async function db_createNewAction(userId, action) {
    action.deletedDate = action.deletedDate ? action.deletedDate : '';
  
    const actionMap = {
      createdDate: action.createdDate,
      deletedDate: action.deletedDate,
      completedTimeline: action.completedTimeline,
      timesSet: action.timesSet,
      name: action.name,
      active: action.active,
      category: action.category,
      timesCompleted: action.timesCompleted,
      points: action.points,
    };
  
    const params = {
      TableName: container.tables.userInfo,
      Key: {
        'id': userId,
      },
      UpdateExpression: 'SET actions = list_append(actions, :newAction)',
      ExpressionAttributeValues: {
        ':newAction': [actionMap],
      },
      ReturnValues: 'ALL_NEW',
    };
  
    console.log(`PUTTING ACTION: ${util.inspect(actionMap)}`);
  
    try {
      const data = await container.docClient.update(params).promise();
      console.log(`Item added to table!\n${util.inspect(data.Attributes)}\n\n********************`);
    } catch (err) {
      console.error(`ERROR ADDING TO DB:\n${err}\n\n********************`);
    }
  
    return true;
  }

