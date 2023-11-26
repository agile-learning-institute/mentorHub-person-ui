#!/bin/bash

# Build Docker Image
docker build --file src/docker/Dockerfile --tag ghcr.io/agile-learning-institute/mentorhub-person-ui:latest .
if [ $? -ne 0 ]; then
    echo "Docker build failed"
    exit 1
fi

curl https://raw.githubusercontent.com/agile-learning-institute/institute/mentorhub/docker-compose/run-local-person.sh | /bin/bash