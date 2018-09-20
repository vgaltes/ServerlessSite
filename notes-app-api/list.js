import * as dynamoDBLib from './libs/dynamodb-lib'
import { success, failure } from './libs/response-lib'

export async function main(event, context, callback) {
    const params = {
        TableName: process.env.notesTableName,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.requestContext.identity.cognitoIdentityId
        }
    };

    try {
        const result = await dynamoDBLib.call('query', params);
        callback(null, success(result.Items));
    } catch (e) {
        console.log(e);
        callback(null, failure({ status: false }));
    }
}
