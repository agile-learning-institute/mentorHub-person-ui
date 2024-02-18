#!/bin/bash

echo "Ensure we are running in the proper folder"
if !([[ -d "./src/docker" ]] && [[ -f "./src/main.js" ]]); then 
    echo "This script must be run from the repository root folder"
    exit 1
fi

# CI Will not have access to .gitignore'd files, so we remove node_modules
echo "Removing modules"
rm -r ./node_modules

echo "Building Docker Image"
docker build --file src/docker/Dockerfile --tag ghcr.io/agile-learning-institute/mentorhub-person-ui:latest .
if [ $? -ne 0 ]; then
    echo "Docker build failed"
    exit 1
fi

# Start the containers
mh up person

echo "Restoring modules"
npm install > /dev/null 2> /dev/null
