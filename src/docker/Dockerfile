# Build stage
FROM node:16 AS build

# Install git (for branch/patch info)
RUN apt-get update && apt-get install -y git

# Install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# Build server deployment 
COPY . .
RUN npm run build

# Get branch and patch level, then create patch.txt file
RUN BRANCH=$(git rev-parse --abbrev-ref HEAD) && \
    DATE=$(date "+%Y-%m-%d:%H:%M:%S") && \
    echo $DATE.$PATCH > ./dist/patch.txt

# Deployment stage
FROM nginx:stable-alpine as deploy

# Default Environment Variable values
ENV API_HOST = mentorhub-persion-api 
ENV API_PORT 8083

# Copy built assets from build stage to nginx serving directory
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/src/docker/default.conf.template /etc/nginx/templates/default.conf.template

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
