# Note

- use legacy lambda design pattern, `context.succeed`.

# Swagger 

- serverless-api-proxy is for SAM tool.
- Ref: SAM Tool integration with Swagger file, https://medium.com/@mecsantos/swagger-api-gateway-lambda-setup-using-aws-serverless-application-model-4acbe80eee1c
- Ref: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessapi
- Ref: https://aws.amazon.com/about-aws/whats-new/2017/02/aws-serverless-application-model-aws-sam-supports-inline-swagger-and-aws-cloudformation-intrinsic-functions/
- Ref: https://github.com/awslabs/serverless-application-model/blob/master/examples/2016-10-31/inline_swagger/template.yaml
- Ref: https://www.baeldung.com/aws-serverless

# Reference

- Ref: https://stackoverflow.com/questions/47906116/context-vs-callback-in-aws-lambda
- Ref: https://forums.aws.amazon.com/thread.jspa?messageID=755419
- Ref: https://github.com/awslabs/serverless-application-model/tree/master/examples/apps

# Use SAM Template Modal to package out a Cloudformation Template

- Ref: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-quick-start.html
- Ref: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-start-lambda.html
  (Test localy using AWS SDK)
- Ref: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-package.html
  (Output to Cloudformation Template)

```
sam package --output-template-file ./aabb.yml --s3-bucket young-power-dev
aws cloudformation deploy --template-file /home/scott/workspace/tmp-study-save/serverless-application-model/examples/2016-10-31/hello_world/aabb.yml --stack-name AABBCC --capabilities CAPABILITY_IAM
```

# How to quickly demo

- By SAM Tool Way

```sh
make local-apigw
```

- By Express Local Running

```sh
make local-nodejs
```

- Build Cloudformation Template From SAM Model Template

```sh
make create-cloudformation-template
```

# Import API from OpenAPI file(swagger)

- Ref: https://docs.aws.amazon.com/apigateway/latest/developerguide/import-edge-optimized-api.html
- Ref: https://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-lambda.html
- Ref: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-as-lambda-proxy-export-swagger-with-extensions.html
- Ref: https://github.com/amazon-archives/aws-apigateway-importer

# Using serverless to deploy our lambda function

- Ref: https://serverless.com/framework/docs/providers/aws/guide/functions/
- What will be packaged and upload? Ref: https://serverless.com/framework/docs/providers/aws/guide/packaging/

 