#!/bin/bash

# Build Docker Image
docker buildx build --platform linux/amd64,linux/arm64 --file src/docker/Dockerfile --tag ghcr.io/agile-learning-institute/institute-person-ui:latest . --push
if [ $? -ne 0 ]; then
    echo "Docker build failed"
    exit 1
fi

curl https://raw.githubusercontent.com/agile-learning-institute/institute/main/docker-compose/run-local-person.sh | /bin/bash