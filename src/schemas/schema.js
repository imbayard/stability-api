import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`

    type User {
        id: String!,
        name: String,
        currentBalanceProfile: BalanceProfile,
        actions: [Action],
        week: Week,
        weekReports: [Week],
        today: Day,
        dayReports: [Day]
    }

    type BalanceProfile {
        body: Float!,
        mind: Float!
    }

    type Action {
        name: String!,
        points: Int!,
        category: String!,
        timesSet: Int!,
        timesCompleted: Int!,
        completedTimeline: [Int]!
        createdDate: String!,
        deletedDate: String,
        active: Boolean!
    }

    input ActionInput {
        name: String!,
        points: Int!,
        category: String!,
        timesSet: Int!,
        timesCompleted: Int!,
        completedTimeline: [Int]!
        createdDate: String!,
        deletedDate: String,
        active: Boolean!
    }

    input ActionImplInput {
        name: String!,
        points: Int!,
        category: String!
    }

    type Week {
        pointsSet: Int!,
        pointsComplete: Int!,
        days: [Day]!
        startDate: String!,
        endDate: String!
    }

    type ActionImpl {
        name: String!,
        category: String!,
        points: Int!
    }

    type Day {
        pointsSet: Int!,
        pointsComplete: Int!,
        actionsComplete: [ActionImpl]!
        actionsSet: [ActionImpl]!
        shmate: String!
    }

    type IntensitySchedule {
        monday: Int!,
        tuesday: Int!,
        wednesday: Int!,
        thursday: Int!,
        friday: Int!,
        saturday: Int!,
        sunday: Int!
    }

    type Query {
        userInfo(id: String!): User!
    }

    type Mutation {
        createNewAction(userId: String!, action: ActionInput!): Boolean!
        createNewUser(email: String!, userId: String!): Boolean!
        updateUserDay(id: String!, pointsSet: Int, pointsComplete: Int, actionsSet: [ActionImplInput], actionsComplete: [ActionImplInput]): Boolean!
    }
`
