cd ../institute-mongodb
./docker-build.sh

cd ../institute-person-api
./docker-build.sh

cd ../institute-person-ui
./docker-build.sh

docker image prune -f

docker compose up --detach