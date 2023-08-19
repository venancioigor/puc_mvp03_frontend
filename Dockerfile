# Use an official Node.js runtime with the specified version as a base image
FROM node:16.14.0

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the remaining application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 5002 for the application
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
