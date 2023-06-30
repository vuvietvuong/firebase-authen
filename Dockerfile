FROM node:10-alpine

# create destination directory
RUN mkdir -p /var/www/next-app
WORKDIR /var/www/next-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
# COPY package.json .
# RUN npm install --no-cache
# COPY . .

# build necessary, even if no static files are needed,
# since it builds the server as well
# RUN npm run build

# expose 3000 on container
EXPOSE 3000

# start the app
CMD [ "node" ]
