# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY backend/ .

RUN npx prisma generate --no-engine

# Expose the port the app runs on
EXPOSE 8787

# Command to run the application
CMD ["npm", "run", "dev"]
