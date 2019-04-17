const http = require('http')
const fs = require('fs')
http.createServer(function (request, response){
    console.log('request come',request.url)
    
  if(request.url === '/'){
    const http = fs.readFileSync('test.html','utf8')
    response.writeHead(200,{
        'Content-Type': 'text/html'
    })
    response.end(http)
  }
//よくある方法はbuild後jsのコートをhash化し、routeとして保存,そうすれば内容変換するまでにcacheは保存される
  if(request.url === '/script.js'){
    response.writeHead(200,{
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=200,public'
    })
    response.end('console.log("script loaded twice")')
  }
}).listen(8888)

console.log('server listening on 8888')