#!/bin/bash

# Build Docker Image
docker build --file src/docker/Dockerfile --tag ghcr.io/agile-learning-institute/mentorhub-person-ui:latest .
if [ $? -ne 0 ]; then
    echo "Docker build failed"
    exit 1
fi

/bin/bash =(curl -o - https://raw.githubusercontent.com/agile-learning-institute/mentorhub/main/docker-configurations/run-local.sh) person
