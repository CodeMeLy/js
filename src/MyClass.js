export default class MyClass{
    constructor(option){
        console.log(`create instance using ${option} option.`);
        this.option = option;
    }
    static MyStaticMethod(){
        return 'hello';
    }
    static get MyStaticProperty(){
        return 'goodbye';
    }
}