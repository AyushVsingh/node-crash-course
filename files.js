const fs = require('fs');

//Read File
fs.readFile('./docs/blog.txt', 'utf-8', (err, data) =>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);
    return;
})

console.log("Last Line")

//Write File
fs.writeFile('./docs/blog.txt', 'hello, World', () => {
    console.log('File was writen');
})

fs.writeFile('./docs/blog1.txt', 'hello, World', () => {
    console.log('File was writen');
})

//Directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created')
    })
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted')
    })
}

//delete files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('file delete')
    })
}