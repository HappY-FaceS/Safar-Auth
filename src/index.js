const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const UserService = require('./services/user-service');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);

        //const service = new UserService();
        // console.log("new token is", service.createToken({email: 'rishavkumar3101@dummy.com', id: 1}));
        // console.log("user is",service.verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpc2hhdmt1bWFyMzEwMUBkdW1teS5jb20iLCJpZCI6MSwiaWF0IjoxNjc4NzEwODk1LCJleHAiOjE2Nzg3OTcyOTV9.kBlNa1f1BAGroC8yGJc59BYXt8GJJO20BcNKrRdAkaU'));

    });
}   

prepareAndStartServer();