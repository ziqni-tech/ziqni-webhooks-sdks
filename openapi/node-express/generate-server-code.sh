#!/bin/bash

# Execute this script from inside the openapi folder
openapi-generator-cli version 6.0
SPEC_FILE=../ziqni-webhooks-api.yml
CONF_FILE=ziqni-webhooks-api.config.yml
FILE=generate-server-code.sh


if [ -z "$1" ]; then
  echo "No argument supplied"
else
  cd ../node-express || exit
fi

echo "++++++++++ GENERATING ++++++++++"
pwd

if [ -f "$FILE" ]; then
  echo "$FILE exists."
else
  echo "$FILE does not exist."
  exit
fi

openapi-generator-cli generate -g  nodejs-express-server -i $SPEC_FILE -c $CONF_FILE -o ../../node-express

cd ../../node-express || exit



