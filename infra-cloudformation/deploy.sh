#!/usr/bin/env bash

set -e
stage=$1

cfn-create-or-update \
  --stack-name calculator-web-app-s3-bucket-${stage} \
  --template-body file://infra-cloudformation/calculator-webapp.yml \
  --parameters ParameterKey=stage,ParameterValue=${stage} \
  --wait

aws s3 sync build s3://calculator-web-app-${stage} --delete