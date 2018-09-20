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

npx aws-api-gateway-cli-test --username admin@example.com --password P2ssw0rd01! --user-pool-id us-east-1_kXaW0urTP --app-client-id 13m88km8ed1v3q9lvbjsbmitd3 --cognito-region us-east-1 --identity-pool-id us-east-1:aed07e16-e465-4dca-ba59-1c18cfa08041 --invoke-url https://gqalwe06kh.execute-api.us-east-1.amazonaws.com/dev --api-gateway-region us-east-1 --path-template /notes --method POST --body "{\"content\":\"hello world\",\"attachment\":\"hello.jpg\"}"