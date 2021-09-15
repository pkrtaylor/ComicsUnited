// lets a get simple express server up and running 
const express = require('express')

const cors = require('cors')

//lets initialize our app varibale with aexprress
const app = express();

app.use(cors())
//test




//define routes

app.use('/comicapi', require('./routes/comicapi'))


// then we take the app varibale and want to listen on a port 
// process..env.PORT is or heroku, 5000 is for local
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));