import { container } from "../config/container.js"
import util from 'util'

export const db_updateUserDay = async (id, pointsSet, pointsComplete, actionsSet, actionsComplete) => {
    const shmate = new Date().toISOString().slice(0, 10) // Get today's date in YYYY-MM-DD format

    const today = {
        pointsSet,
        pointsComplete,
        actionsSet,
        actionsComplete,
        shmate
    }

    const params = {
        TableName: container.tables.userInfo,
        Key: {
          'id': id,
        },
        UpdateExpression: 'SET today = :today',
        ExpressionAttributeValues: {
          ':today': today,
        },
        ReturnValues: 'ALL_NEW',
      };
      
      console.log(`UPDATING DAY: ${util.inspect(today)}`);
    
      try {
        const data = await container.docClient.update(params).promise();
        console.log(`Item added to table!\n${util.inspect(data.Attributes)}\n\n********************`);
      } catch (err) {
        console.error(`ERROR ADDING TO DB:\n${err}\n\n********************`);
      }
    
      return true;
}