const port = process.env.PORT || 9075
const http = require('http')
const app = require('.')

const server = http.createServer(app)

server.listen(port,()=>{
    console.log("server started at port 9075")
})


