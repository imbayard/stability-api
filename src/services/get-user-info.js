import { container } from "../config/container.js";

export default async function db_getUserInfo(id) {
    const params = {
        TableName: container.tables.userInfo,
        Key: { id },
    };

    try {
        const result = await container.docClient.get(params).promise();
        return result.Item;
    } catch (error) {
        console.error('Error fetching userInfo:', error);
        throw error;
    }
}