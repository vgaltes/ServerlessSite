DynamoDB autoscaling: https://aws.amazon.com/blogs/database/how-to-use-aws-cloudformation-to-configure-auto-scaling-for-amazon-dynamodb-tables-and-indexes/

Cognito via serverless: https://github.com/bsdkurt/aws-node-custom-user-pool






    Pool Id us-east-1_kXaW0urTP
    Pool ARN arn:aws:cognito-idp:us-east-1:165940758985:userpool/us-east-1_kXaW0urTP

    App client id 3id90reg8014cun4jlt6bbmkt6



aws cognito-idp sign-up \--region us-east-1 \
--client-id 3id90reg8014cun4jlt6bbmkt6 \
--username admin2@example.com \
--password P2ssw0rd01! \
--profile vgaltes-private \
--user-attributes Name=email,Value=admin2@example.com


AWS_PROFILE=vgaltes-private sls invoke local --function create --path mocks/create-event.json

