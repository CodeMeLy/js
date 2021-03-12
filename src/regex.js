var re = /[a-z]+/;
if(re.test("foo")){
    console.log("match success!");
}
var match = re.exec("heLlo");
console.log(match);
