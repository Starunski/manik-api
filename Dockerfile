#Stage 1

FROM node
#Working Directory
WORKDIR /

# Copy files
COPY package.json ./

#Install prettier
#RUN npm install -g prettier

#install dependencies
RUN npm install

#Copy files
COPY . /

#Expose port
#EXPOSE 1337

CMD [ "npm", "start" ]

#Stage 2

FROM node
#Working Directory
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
COPY ormconfig.docker.json ./ormconfig.json
EXPOSE 4000
#CMD [ "npm", "start" ]
CMD  node dist/src/index.js