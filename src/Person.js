var person = {
    name: 'John',
    age:42,
    gender:"male",
    bio:function(){
        console.log("My name is "+this.name);
    }
}
export default person;