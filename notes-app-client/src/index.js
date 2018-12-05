import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import Amplify from "aws-amplify";
import config from "./config";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    // region: config.cognito.REGION,
    // userPoolId: config.cognito.USER_POOL_ID,
    // identityPoolId: config.cognito.IDENTITY_POOL_ID,
    // userPoolWebClientId: config.cognito.APP_CLIENT_ID
    region: "eu-west-1",
    userPoolId: "eu-west-1_ZhE6p80om",
    identityPoolId: "eu-west-1:4c4cd28b-f807-4e6c-80c2-f8fafd3ee199",
    userPoolWebClientId: "25pot1eua0stlqj8roknut820m"
  },
  // Storage: {
  //     region: config.s3.REGION,
  //     bucket: config.s3.BUCKET,
  //     identityPoolId: config.cognito.IDENTITY_POOL_ID
  // },
  API: {
    endpoints: [
      {
        // name: "notes",
        // endpoint: config.apiGateway.URL,
        // region: config.apiGateway.REGION
        name: "masters",
        endpoint: "https://6rf3v00hv9.execute-api.eu-west-1.amazonaws.com/dev",
        region: "eu-west-1"
      }
    ]
  }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
