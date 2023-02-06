FROM node:17
#Working Directory
WORKDIR /app

# Copy files
COPY package.json ./server

#Install prettier
#RUN npm install -g prettier

#install dependencies
RUN npm install

#Copy files
COPY . /server

#Expose port
#EXPOSE 1337

CMD [ "npm", "start" ]