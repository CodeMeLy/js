export default class Something{
    constructor(data){
        this.data = data;
    }
    doSomething(text){
        return {
            data: this.data,
            text
        }
    }
}