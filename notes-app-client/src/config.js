export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-dev-attachmentsbucket-1ltot9spfjdhf"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vbzwo2ncr4.execute-api.eu-west-1.amazonaws.com/devvgaltes"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_2HADSF62M",
    APP_CLIENT_ID: "44onb9alfj16qv3btc74kj7uph",
    IDENTITY_POOL_ID: "us-east-1:ff922804-7e90-458b-91e1-12fc0a58d649"
  }
};
