let http = require('http');

let server = http.createServer((req,res)=>{

    if(req.url == "/moda"){
        res.end("<html> <body> Moda </body><html>");
    }else if(req.url == "/tecnologia"){
        res.end("<html> <body> tecnologia </body><html>");
    }else{
        res.end("<html> <body> oi </body><html>");
    }
    res.end("<html> <body> oi </body><html>");
});

server.listen(3001);
