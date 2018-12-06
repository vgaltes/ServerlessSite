DynamoDB autoscaling: https://aws.amazon.com/blogs/database/how-to-use-aws-cloudformation-to-configure-auto-scaling-for-amazon-dynamodb-tables-and-indexes/

Cognito via serverless: https://github.com/bsdkurt/aws-node-custom-user-pool






User Pool Id us-east-1_2HADSF62M
User Pool ARN arn:aws:cognito-idp:us-east-1:165940758985:userpool/us-east-1_2HADSF62M
App client id 44onb9alfj16qv3btc74kj7uph

Identity pool id: us-east-1:ff922804-7e90-458b-91e1-12fc0a58d649

aws cognito-idp sign-up \
--region us-east-1 \
--client-id 44onb9alfj16qv3btc74kj7uph \
--username admin@example.com \
--password P2ssw0rd01! \
--user-attributes Name=email,Value=admin@example.com


aws cognito-idp admin-confirm-sign-up \                                                                              ✘ 127
  --region us-east-1 \
  --user-pool-id us-east-1_2HADSF62M \
  --username admin@example.com \
--profile vgaltes-private

AWS_PROFILE=vgaltes-private sls invoke local --function create --path mocks/create-event.json
AWS_PROFILE=vgaltes-private sls invoke local --function get --path mocks/create-event.json
AWS_PROFILE=vgaltes-private sls invoke local --function list --path mocks/create-event.json
AWS_PROFILE=vgaltes-private sls invoke local --function update --path mocks/update-event.json
AWS_PROFILE=vgaltes-private sls invoke local --function delete --path mocks/delete-event.json

npx aws-api-gateway-cli-test --username admin@example.com --password P2ssw0rd01! --user-pool-id us-east-1_2HADSF62M --app-client-id 44onb9alfj16qv3btc74kj7uph --cognito-region us-east-1 --identity-pool-id us-east-1:ff922804-7e90-458b-91e1-12fc0a58d649 --invoke-url https://axn85vctr2.execute-api.us-east-1.amazonaws.com/dev --api-gateway-region us-east-1 --path-template /notes --method POST --body "{\"content\":\"hello world\",\"attachment\":\"hello.jpg\"}"


======== USEFUL COMMANDS ====== 
AWS_PROFILE=vgaltes-private node seedMasters.js masters-prod
SKIP_PREFLIGHT_CHECK=true npm start
SLSUSER=vgaltes SLS_DEBUG=* npm run deploy -- --aws-profile=vgaltes-private --stage=devvgaltes
