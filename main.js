const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3000

const server = http.createServer((request, response) => {
  // handle request based on routes
  switch (request.url) {
    // '/' route
    case '/':
      fs.readFile(path.join(__dirname, 'public/home.html'), 'utf8', (err, data) => {
        // handle error in reading file
        if (err) throw err
        // set response status code and content type, render HTML 
        response.writeHead(200, {
          'Content-Type': 'text/html'
        })
        response.end(data)
      })
      break;

      // about me route
    case '/about':
      fs.readFile(path.join(__dirname, 'public/about.html'), 'utf8', (err, data) => {
        // handle error in reading file
        if (err) throw err
        // set response status code and content type, render HTML 
        response.writeHead(200, {
          'Content-Type': 'text/html'
        })
        response.end(data)
      })
      break;

      // contact me route
    case '/contact':
      fs.readFile(path.join(__dirname, 'public/contact.html'), 'utf8', (err, data) => {
        // handle error in reading file
        if (err) throw err
        // set response status code and content type, render HTML 
        response.writeHead(200, {
          'Content-Type': 'text/html'
        })
        response.end(data)
      })
      break;

      // home route
    case '/home':
      // redirect request to "/" route
      response.writeHead(302, {
        Location: "/"
      })
      response.end()
      break;

      // 404 - page not found
    default:
      fs.readFile(path.join(__dirname, 'public/404.html'), 'utf8', (err, data) => {
        // handle error in reading file
        if (err) throw err
        // set response status code and content type, render HTML 
        response.writeHead(404, {
          'Content-Type': 'text/html'
        })
        response.end(data)
      })
      break;
  }
})

// listen to request at localhost:3000
server.listen(3000, () => {
  console.log(`Server started on localhost: port ${ PORT }`)
})