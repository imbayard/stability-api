import { container } from '../config/container.js'
import util from 'util'

export default async function db_createNewAction(userId, action) {
    const db = container.database

    action.deletedDate = action.deletedDate ? action.deletedDate : ''

    const actionMap = {
        createdDate: {S:action.createdDate},
        deletedDate: {S: action.deletedDate},
        completedTimeline: {L: action.completedTimeline},
        timesSet: {N: action.timesSet.toString()},
        name: {S: action.name},
        active: {BOOL: action.active},
        category: {S: action.category},
        timesCompleted: {N: action.timesCompleted.toString()},
        points: {N: action.points.toString()}
    }
    const params = {
        TableName: container.tables.userInfo,
        Item: {
            'id': {S: userId},
            'actions': {L: [{M: actionMap}]}
        }
    }

    console.log(`PUTTING ACTION: ${util.inspect(actionMap)}`)
    db.putItem(params, (err, data) => {
        if (err) {
            console.error(`ERROR ADDING TO DB:\n${err}\n\n********************`)
        } else {
            console.log(`Item added to table!\n${data}\n\n********************`)
        }
    })

    return true
}

