let  express  =  require('express')
var  bodyParser  =  require('body-parser')  
let  app  =  express()  
let  url  =  require('url')  
let  querystring  =  require('querystring')  
app.use(bodyParser.json()); //  for  parsing  application/json
app.use(bodyParser.urlencoded({ extended:  true  }));  //  for  parsing  application/x-www-form-urlencoded
//  GET  method route 
app.get('/',  function  (request,  response)  {
        response.send('GET  request  to  the  homepage\n') 
 }) 
 //  POST  method  route
 app.post('/',  function  (request,  response)  {
          console.log("Body:  "  + JSON.stringify(request.body)) //  Body:  {"event":"pulse","data":"65",...}   
          console.log("mean:  "  + querystring.parse(request.body.data).mean)    
          console.log("recent:  "  + querystring.parse(request.body.data).recent)   
          console.log("range:  "  + querystring.parse(request.body.data).range)   
          response.send('POST  request  to  the  homepage\n')  
})  
app.listen(process.env.PORT ||  3000,  ()  => console.log('Example  app  listening  on  port  3000!'))