#!/bin/bash
cd ../..
npm install
npm run build
BRANCH=$(git branch --show-current)
PATCH=$(git rev-parse $BRANCH)
echo $BRANCH.$PATCH > ./dist/patch.txt
cd src/docker
docker build . --tag ghcr.io/agile-learning-institute/institute-person-ui:latest
# docker tag institute-person-ui:latest ghcr.io/agile-learning-institute/institute-person-ui:latest
# docker push ghcr.io/agile-learning-institute/institute-person-ui:latest
