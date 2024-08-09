//reverse number
function reverseNumber(num){
    let str = num.toString();
    let reverseStr = str.split('').reverse().join('');
    console.log(parseInt(reverseStr))
}

reverseNumber(-123)

//reverse string
// function reverseString(str){
//     const revStr = str.split('').reverse().join('');
//     return revStr;
// }

// console.log(reverseString("abcd"));

