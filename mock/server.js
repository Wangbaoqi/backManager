
const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middleware = jsonServer.defaults()

server.use(middleware)
server.use(router)



server.listen(3001, () => {
  console.log('JSON Server is running, listening http://localhost:3001')
})