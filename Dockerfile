# Use the Nginx image
FROM nginx:latest

# Copy the static files from dist/ to the Nginx container
COPY ./dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
