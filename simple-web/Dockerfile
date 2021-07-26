# Specify a base image
FROM node:alpine

# Specify WORKDIR
WORKDIR /usr/app

# Copy package.json first
# to make sure to not rerun after every build
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Copy app file into container
COPY ./ ./

# Default command
CMD ["npm", "start"]