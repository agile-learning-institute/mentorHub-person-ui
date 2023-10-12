# syntax=docker/dockerfile:1
FROM amd64/ngnix:latest

ADD ./output /
ADD ./PATCH_LEVEL /

EXPOSE 8080:8080

