const PORT = process.env.PORT || 8000;

const app = require('./app')


const http = require('http');
const server = http.createServer(app);



async function startServer(){

    server.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    })
    
}

startServer();