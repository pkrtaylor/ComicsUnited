const express = require('express')
const router = express.Router(); 
const request = require('request');


//@route     GET comicapi/results
//@desc      get results of name input
//@access     public

router.get('/results/:name',(req,res) => {

    try {
      const options ={
          uri:`http://superheroapi.com/api/4347250252054938/search/${req.params.name}`,
          method: 'GET'
     
      };  
      console.log(options.uri);
      request(options, (error, response, body) =>{
          if(error){
              console.error(error);
          }

          if(response.statusCode !== 200){
              res.status(404).json({msg: 'Not found'});
          }
        console.log(JSON.parse(body))
        res.json(JSON.parse(body))
        
          });
      
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
});



//@route     GET comicapi/character/:id
//@desc      get result of individual character
//@access     public

router.get('/character/:id',(req,res) => {

    try {
      const options ={
          uri:`http://superheroapi.com/api/4347250252054938/${req.params.id}`,
          method: 'GET'
     
      };  
      console.log(options.uri);
      request(options, (error, response, body) =>{
          if(error){
              console.error(error);
          }

          if(response.statusCode !== 200){
              res.status(404).json({msg: 'Not found'});
          }
        console.log(JSON.parse(body))
        res.json(JSON.parse(body))
        
          });
      
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports= router;