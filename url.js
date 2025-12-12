import url from 'url'
import http from 'http'
const PORT = 3000
const server = http.createServer((req, res) =>{
    const parseUrl = url.parse(req.url,true)
    console.log(parseUrl);
    res.end('hello world ' + parseUrl.query.user)  
})

server.listen(PORT, () =>{
    console.log('server is running');
})