console.log(global);
setTimeout(() => {
    console.log("hii.. Inside setTimeout");
}, 3000);

// const int = setInterval(() => {
//     console.log("in the interval")
// }, 1000)

console.log(__dirname); //Returns directory path
console.log(__filename); //Gives the path till filename
