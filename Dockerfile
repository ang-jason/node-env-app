# Use the official Node.js image as the base image
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy local code to the container image
COPY . .

# Set environment variables
ENV PORT=3000

# Expose the port the app runs on
EXPOSE $PORT

# Run the web service on container startup
CMD [ "node", "index.js" ]
