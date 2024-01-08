# Use an official Node runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all local files to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000
EXPOSE 5432

# Start the app
CMD ["npm", "start"]
