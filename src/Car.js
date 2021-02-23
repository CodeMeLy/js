let METADATA = Symbol('metadata');
export default class Car{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    [METADATA](){
        return {
            make: this.make,
            model: this.model
        }
    }
    ["add"](first,second){
        return first + second;
    }
    log(){
        console.log( `${this[METADATA]().make}`);
    }
}