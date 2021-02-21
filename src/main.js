import MyClass from "./MyClass.js";
function main(){
    const myClass = new MyClass("option");
    console.log(MyClass.MyStaticMethod());
    console.log(MyClass.MyStaticProperty);
}
main();