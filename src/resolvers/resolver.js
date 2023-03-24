import db_createNewAction from "../services/create-new-action.js";
import db_createNewUser from "../services/create-new-user.js";
import db_getUserInfo from "../services/get-user-info.js";

export const resolvers = {
    Query: {
        userInfo: async (_, { id }) => {
            console.log('Getting user info...')

            return await db_getUserInfo(id)
        }
    },
    Mutation: {
        async createNewAction(_, {userId, action}) {
            console.log('Creating new action...')
            
            return await db_createNewAction(userId, action)
        },
        async createNewUser(_, { email, userId }) {
            console.log('Creating new user...')

            return await db_createNewUser(email, userId)
        }
    }
  };