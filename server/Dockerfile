#pulling official node image
FROM node:12.16.1-alpine

# set workdir
WORKDIR "/app"

# copy package.json & yarn.lock
COPY package.json .
COPY package-lock.json .

# install dependencies
RUN npm install

# copy other files/directories
COPY . .

CMD ["npm" , "run" ,"start"]
