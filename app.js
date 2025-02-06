//create http webserver en listen to a port
const http = require('http') //http library 
const fs = require('fs') //require library fs voor file handling
const port = 3000 //port to listen to

const server = http.createServer(function(req,res){ //create server en doe iets
    res.writeHead('200',{ 'Content-Type' : 'text/html' }) //tell the browser the file the server is sending is a html file
    fs.readFile('index.html',function(error,data){ //get a file for the request //here index.html
        if(error){
            res.writeHead(404)
            res.write("Error 404 - File not found") //if 404 the file is not found on the server
        }else{
            res.write(data)
        }
        res.end()
    })
    
    // res.write("<h1>Hello bezoeker</h1>c")
    // res.end()
}) 

server.listen(port,function(error){ //zorg dat naar de goede poort geluisterd wordt
    if(error){
        console.log("we hebben een error",error) //log error
    }else{
        console.log("server is listening on port: "+port) //geen error, alles gaat goed
    }
}) 

// console.log(this,'HELLO NODE')