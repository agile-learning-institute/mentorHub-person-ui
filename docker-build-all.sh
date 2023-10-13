cd ../institute-mongodb
docker build . --tag institute-mongosh

cd ../institute-person-api
GOOS=linux GOARCH=amd64 go build -o "institute-person-api" main.go
docker build . --tag institute-person-api

cd ../institute-person-ui
docker build . --tag institute-person-ui
