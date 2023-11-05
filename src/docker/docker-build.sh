#!/bin/bash

# Build Docker Image
docker build --file src/docker/Dockerfile --tag ghcr.io/agile-learning-institute/institute-person-ui:latest .
if [ $? -ne 0 ]; then
    echo "Docker build failed"
    exit 1
fi

# Run the Database, API, and UI containers
if [ "$1" = '--run' ]; then
    curl https://raw.githubusercontent.com/agile-learning-institute/institute/main/docker-compose/run-local-person.sh | /bin/bash
fi

# Push Docker image (To be removed when CI works)
if [ "$1" = '--push' ]; then
    docker push ghcr.io/agile-learning-institute/institute-person-ui:latest
    if [ $? -ne 0 ]; then
    echo "Docker build failed"
    exit 1
        echo "Docker push failed"
        exit 1
    fi
    echo "image pushed"
fi
