import pkg from 'aws-sdk';
const { config, DynamoDB } = pkg;
config.logger = console;
config.update({region: 'us-east-1'})

const database = new DynamoDB()

export const container = {
    database,
    tables: {
        userInfo: 'stable-graphql-user-info'
    }
}