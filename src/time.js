function repeatFunction(){
    console.log("it's been 5 seconds");
    setTimeout(repeatFunction, 5000);
}
function secondRepeatFunction(){
    console.log("it's been 5 second");
}
repeatFunction();
setInterval(secondRepeatFunction, 5000);
