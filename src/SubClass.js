import SuperClass from "./SuperClass.js";
export default class SubClass extends SuperClass{
    constructor(){
        super();
        this.name = "subclass";
    }
}