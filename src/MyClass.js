export default class MyClass{
    constructor(option){
        console.log(`create instance using ${option} option.`);
        this.names_ = [];
        this.option = option;
    }
    static MyStaticMethod(){
        return 'hello';
    }
    static get MyStaticProperty(){
        return 'goodbye';
    }
    set name(value){
        this.names_.push(value);
    }
    get name(){
        return this.names_[this.names_.length-1];
    }
}