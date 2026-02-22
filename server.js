const http = require('http');
const fs = require('fs');
const  _ = require('lodash');
const server = http.createServer((req, res) => {
    // console.log('request made');
    // console.log(req.url, req.method);

    //lodash
    const num = _.random(0, 20); 
    console.log(num)

    const greet = _.once(() => {
        console.log('helloooo');
    });
    greet();
    greet();
    //Set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views';
    switch(req.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-mee':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }
    // send a html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            res.end(data); // does the same thing. so add data in res.end();
        }
    })
});

server.listen(3000, () => {
    console.log('listening for a request on port 3000')
})