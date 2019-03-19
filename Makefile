BUCKET_NAME=`read -p "please input a bucket name to upload your packaged file?" bucketName && echo $$bucketName`

default: local-nodejs
build: create-cloudformation-template
sam: local-apigw

install:
	virtualenv .venv -p python3
	. .venv/bin/activate && pip install -r requirements.txt
	cd serverless-app-project && yarn

local-apigw:
	. .venv/bin/activate && sam local start-api

local-nodejs:
	. .venv/bin/activate && cd serverless-app-project && yarn lift

create-cloudformation-template:
	. .venv/bin/activate && sam package --output-template-file ./myServerlessAppTpl.yml --s3-bucket ${BUCKET_NAME}
