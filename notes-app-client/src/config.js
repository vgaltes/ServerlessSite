export default {
  apiGateway: {
    REGION: process.env.REGION,
    URL: process.env.API_URL
  },
  cognito: {
    REGION: process.env.REGION,
    USER_POOL_ID: process.env.USER_POOL_ID,
    APP_CLIENT_ID: process.env.APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID
  }
};

