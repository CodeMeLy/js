export default class SuperClass{
    constructor(){
        this.logger = console.log;
    }
    log(){
        this.logger(`Hello ${this.name}`);
    }
}