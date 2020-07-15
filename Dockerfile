FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./api/ ./

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

# Build the application to get bundle app source
RUN npm run build

# Change working directory to use bundle app source
WORKDIR /usr/src/app/dist

EXPOSE 3000

# Start application using node
CMD [ "node", "main.js" ]