#!/bin/bash

# Ensure we are running in the proper folder
[[ -d "./src/docker" ]] && [[ -f "./src/main.js" ]] || \
     echo "This script must be run from the repository root folder"; exit 1

# CI Will not have access to .gitignore'd files, so we remove node_modules
rm -r ./node_modules

# Build Docker Image
docker build --file src/docker/Dockerfile --tag ghcr.io/agile-learning-institute/mentorhub-person-ui:latest .
if [ $? -ne 0 ]; then
    echo "Docker build failed"
    exit 1
fi

# Start the containers
mh up person

# Reinstall dependencies removed in the beginning of the script
npm install
