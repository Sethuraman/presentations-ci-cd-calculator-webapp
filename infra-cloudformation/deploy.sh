#!/usr/bin/env bash

set -e
stage = $1

export AWS_ACCESS_KEY_ID=$AWS_ACCESS_STAGING_KEY
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_STAGING_KEY
cfn-create-or-update \
  --stack-name calculator-web-app-s3-bucket-${stage} \
  --template-body file://infra-cloudformation/acustock-web-app-infra.yml \
  --parameters ParameterKey=stage,ParameterValue=${stage} \
  --wait

aws s3 sync build s3://calculator-web-app-${stage} --delete