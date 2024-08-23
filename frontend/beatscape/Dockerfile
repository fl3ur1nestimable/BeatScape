# Stage 1: Build the React app
FROM node:20.15.0 AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Copy the Electron main process files
COPY main.js ./

# Run Electron app
CMD ["npm", "run", "electron-dev"]
