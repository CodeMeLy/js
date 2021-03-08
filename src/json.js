const jsonString = '[{"name":"join","score":51},{"name":"anh","score":23}]';
const data = JSON.parse(jsonString,(key,value)=>{
   return key==="name"?value.toUpperCase():value
});
console.log(data[1]);