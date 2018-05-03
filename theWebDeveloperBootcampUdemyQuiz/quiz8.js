function printReverse(list) {
    for (let i = 0; i < list.length; i++){
        console.log(list[list.length-1-i]);
    }
}
function isUniform(list) {
    let i = 1;
    while(i<list.length && list[i] == list[0]){
        i++;
    }
    return !(i<list.length);
}
function sumArray(list) {
    let sum = 0;
    list.forEach(x => {
        sum += x;
    });
    return sum;
}
const max = (list) => {
    let biggest = list[0];
    list.forEach(x => {
        biggest = (x > biggest)? x:biggest;
    });
    return biggest;
};