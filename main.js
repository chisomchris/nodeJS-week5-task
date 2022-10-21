const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {

  switch (request.url) {
    case '/':
      fs.readFile(path.join(__dirname, 'public/home.html'), 'utf8', (err, data) => {
        if(err) throw err
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.end(data)
      })
      break;
    case '/about':
        fs.readFile(path.join(__dirname, 'public/about.html'), 'utf8', (err, data) => {
          if(err) throw err
          response.writeHead(200, {'Content-Type' : 'text/html'})
          response.end(data)
        })
        break;
    case '/contact':
          fs.readFile(path.join(__dirname, 'public/contact.html'), 'utf8', (err, data) => {
            if(err) throw err
            response.writeHead(200, {'Content-Type' : 'text/html'})
            response.end(data)
          })
          break;
    case '/home':
              response.writeHead(302, {Location : "/"})
              response.end()
            break;
    default:
      response.end('page not found')
      break;
  }
})

server.listen(3000, ()=>{
  console.log('Server started on localhost: port 3000')
})

