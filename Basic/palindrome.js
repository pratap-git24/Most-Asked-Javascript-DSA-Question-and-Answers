//string palindrom
function palindrome(str){
    let revStr = str.split('').reverse().join('')
    
    return str === revStr;
}

console.log(palindrome("asad"))