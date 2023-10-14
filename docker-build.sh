#!/bin/bash
npm install
npm run build
BRANCH=$(git branch --show-current)
PATCH=$(git rev-parse $BRANCH)
echo $BRANCH.$PATCH > ./dist/patch.txt
docker build . --tag institute-person-ui
