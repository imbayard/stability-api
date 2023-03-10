const { gql } = require('apollo-server-lambda');

module.exports.typeDefs = gql`

    type User {
        id: String!,
        name: String!,
        currentBalanceProfile: BalanceProfile!,
        actions: [Action]!,
        week: Week!,
        weekReports: [Week]!,
        day: Day!,
        dayReports: [Day]!,
        preferences: Preferences
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

    type Week {
        pointsSet: Int!,
        pointsComplete: Int!,
        actionsComplete: [ActionImpl]!
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
        date: String!
    }

    type Preferences {
        intensitySchedule: IntensitySchedule!
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
    }
`
