# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on (port 3000 in this case)
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
