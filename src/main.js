import MyClass from "./MyClass.js";
function main(){
    const myClass = new MyClass("option");
    myClass.name = "option2";
    console.log(myClass.name);
}
main();