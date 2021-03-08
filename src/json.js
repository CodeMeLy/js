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