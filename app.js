const express = require('express');
const countryRouter = require('./routes/countryRoutes');


const app = express();


// middlewares
app.use(express.json());




//defining routes 
app.use('/api/v1/countries',countryRouter);







module.exports = app;