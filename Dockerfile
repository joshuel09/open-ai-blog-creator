# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build the Next.js app
# RUN npm run build

# Expose the port on which the app is running
# EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev", "--watch"]