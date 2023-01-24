CREATE TABLE person ( id SERIAL PRIMARY KEY, name varchar(255) , surname varchar(255) , email varchar(255) , password varchar(255) );

CREATE TABLE post ( id int , title varchar(255) , content varchar(255) , user_id int , FOREIGN KEY (user_id) REFERENCES person (id) );