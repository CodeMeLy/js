export default class Queue{
    constructor(){
        const list = [];
        this.enqueue =  function(type){
            list.push(type);
            return type;
        }
        this.dequeue = function(){
            return list.shift();
        }
    }

}