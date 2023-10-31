mkdir person
cd person
curl https://raw.githubusercontent.com/agile-learning-institute/institute-person-ui/main/src/docker/docker-compose.yaml > docker-compose.yaml
docker compose up --detach
