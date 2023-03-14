# Safar : An Application for booking flight Tickets & services related to AirTravel

-> This Project is solely for the backend Authentication & Authorisation of User based on their roles/services

# Safar-Auth-Service : This repo is Auth related to whole backend . JWT token based Auth has been implemented

[DESIGN DOC](https://docs.google.com/document/d/18Az_VeNbd9sjkZpcMkdjBM1kimqoFTH1mbOeB14Z0Ow/edit?usp=sharing)


## Project Setup:
 - clone the project on your local ( git clone ... )
 - Execute `npm install` on the same path as of your root directory of the downloaded project
 - Create a `.env` file in the root directory and add the following environment variable.
    - `PORT=3000`
    - `JWT_KEY = <any string>`
    - `DB_SYNC=<true/false>`
 - Inside the `src/config` folder , create a new file `config.json` and then add the following piece of json

 ```
 "development": {
    "username": <Your_DB_LOGIN_NAME>,
    "password": <Your_DB_PASSWORD>,
    "database": "Auth_DB_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

 ```

 - Once you've added your DB config as listed above,go to the src folder from your terminal and excute the command `npx sequelize db:create`
 and then execute 


