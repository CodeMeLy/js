import MyClass from "./MyClass.js";
function main(){
    const classIntance = new class{
        get prop(){
            return 5;
        }
    }
    console.log(classIntance.prop);
}
main();