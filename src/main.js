import Car from './Car.js';
let METADATA = Symbol('metadata');
function main(){
    const mazda_mpv = new Car("Mazda","MPV");
    console.log(mazda_mpv.add(3,4));
    mazda_mpv.log();
}
main();