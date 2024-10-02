// Generate Hash Tag from String

function generateHash(str){
    let words = str.split(" ");
    let eachStr = words.map((word)=> word.replace(word[0],word[0].toUpperCase()))
    return `#${eachStr.join("")}`
    //console.log(eachStr);    

}

console.log(generateHash("javascript dsa question"));
