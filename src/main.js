import callback from './callback.js';
function main(){
    callback('click',function (option){
        if(option == 'click'){
            console.log(" on click!");
        }
        else if(option == 'onload'){
            console.log(" onload!");
        }
    })
}
main();
