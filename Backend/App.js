const http = require('http')
const port = 4500

const server = http.createServer(function(req,res){
    res.write('Hello Backend')
    res.end()

})

server.listen(port, function(error){
    if(error){
        console.log('something went wrong',error)
     }
      else{
            console.log('server is listining on port' + port)
        }
    }
)