export default function callback(option, status){
    console.log(option);
    return status(option);
}