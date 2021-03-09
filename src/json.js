const jsonString = '[{"name":"join","score":51},{"name":"anh","score":23}]';
const data = JSON.parse(jsonString,(key,value)=>{
   return key==="name"?value.toUpperCase():value
});
console.log(data[0]);
// chuyển sang ngày tháng
const jsonString2 = '{"date":"2016-01-04T23:00:00.000Z"}';
const date = JSON.parse(jsonString2,(key,value)=>{
    return key === "date"?(new Date(value)):value;
})
console.log(date);
// chuyển qua json string
const jsonString3 = JSON.stringify([{'name':1}]);
console.log(jsonString3);
// cắt json
function replacer(key, value){
    if(typeof value === 'string'){
        return;
    }
    return value;
}
var foo = { foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7 }
const data3 = JSON.stringify(foo,replacer);// lọc ra số
console.log(data3);
console.log(JSON.stringify(foo,["foundation"]));