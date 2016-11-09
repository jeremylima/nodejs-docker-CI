#FROM centos:centos6

#MAINTAINER nigelpoulton@hotmail.com

# Enable EPEL for Node.js
#RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm

# Install Node...
#RUN yum install -y npm

# Copy app to /src
#COPY . /src

# Install app and dependencies into /src
#RUN cd /src; npm install

#EXPOSE 8080

#CMD cd /src && node ./app.js



FROM ubuntu:latest
MAINTAINER Matt Brewster <matt.brewster@base2s.com>

RUN apt-get update && apt-get -y install nodejs npm
RUN mkdir /app
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app

#RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g frisby jasmine-node

EXPOSE 8080
