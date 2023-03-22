import { v4 as uuidv4 } from 'uuid';
import { container } from '../config/container.js'

const dynamodb = container.database
const tableName = container.tables.userInfo

export default async function db_createNewUser(email, id) {
  const userInfo = {
    id: {S: id},
    email: {S: email},
    name: {S: ''},
    currentBalanceProfile: {M: { body: {N: '0'}, mind: {N: '0'} }},
    actions: {L: []},
    week: {M: { pointsSet: {N: '0'}, pointsComplete: {N: '0'}, actionsComplete:{L: []}, startDate: {S: ''}, endDate: {S: ''} }},
    weekReports: {L: []},
    day: {M: { pointsSet: {N: '0'}, pointsComplete: {N: '0'}, actionsComplete:{L: []}, date: {S: ''} }},
    dayReports: {L: []},
    preferences: {M: { 
        intensitySchedule: {M: {
            monday: {N: '0'}, tuesday: {N: '0'}, wednesday: {N: '0'}, 
            thursday: {N: '0'}, friday: {N: '0'}, saturday: {N: '0'}, sunday: {N: '0'}
        } } 
    }},
  };

  const params = {
    TableName: tableName,
    Item: userInfo,
    ConditionExpression: 'attribute_not_exists(id)',
  };

  try {
    await dynamodb.putItem(params).promise();
    console.log(`Successfully added user with ID ${id} to DynamoDB table ${tableName}`);
    return true;
  } catch (err) {
    if (err.code === 'ConditionalCheckFailedException') {
      console.error(`User with ID ${id} already exists in DynamoDB table ${tableName}`);
      throw new Error(`User with ID ${id} already exists`);
    } else {
      console.error(`Error adding user to DynamoDB table ${tableName}:`, err);
      throw err;
    }
  }
}