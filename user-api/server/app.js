const express = require('express')
const cors = require('cors');
// DB Connection
require('./config/databaseConfig')

const appRoute = require("./route/appRoute");

// Express Start
const app = express();

// Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

// Routes
app.use("/", appRoute);

// App Start
const port = 3100;
app.listen(port, () => {
    console.log('Server Started')
});