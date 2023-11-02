#!/bin/bash
npm install
if [ $? -ne 0 ]; then
    echo "NPM Install failed"
    exit 1
fi

npm run build
# Get branch and patch level
BRANCH=$(git branch --show-current)
if [ $? -ne 0 ]; then
    echo "Failed to get git branch"
    exit 1
fi

PATCH=$(git rev-parse $BRANCH)
if [ $? -ne 0 ]; then
    echo "Failed to get git commit hash"
    exit 1
fi

echo $BRANCH.$PATCH > ./dist/patch.txt

# Build Docker image
docker build . --tag ghcr.io/agile-learning-institute/institute-person-ui:latest
if [ $? -ne 0 ]; then
    echo "Docker build failed"
    exit 1
fi

# Push Docker image
if [ $1 -eq '--push' ]; then
    docker push ghcr.io/agile-learning-institute/institute-person-ui:latest
    if [ $? -ne 0 ]; then
        echo "Docker push failed"
        exit 1
    fi
    echo "image pushed"
fi