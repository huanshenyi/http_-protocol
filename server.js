const http = require('http')
const fs = require('fs')
http.createServer(function (request, response){
    console.log('request come',request.url)
    
    const http = fs.readFileSync('test.html','utf8')
    response.writeHead(200,{
        'Content-Type': 'text/html'
    })
    response.end(http)
}).listen(8888)

console.log('server listening on 8888')