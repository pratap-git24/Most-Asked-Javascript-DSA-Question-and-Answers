// Generate Hash Tag from String

function generateHash(str){
    let words = str.split(" ");
    let eachStr = words.map((word)=> word.replace(word[0],word[0].toUpperCase()))
    return `#${eachStr.join("")}`
    //console.log(eachStr);    

} 

console.log(generateHash("javascript dsa question"));

// SOLUTION 2

function generateHash2(str){
   let str2 = str.split(" ");
   let res = str2.map((currEle)=>{
     return currEle.charAt(0).toUpperCase() + currEle.slice(1)
   })   
   return `#`+res.join(""); 
}

console.log(generateHash2("javascript dsa question"));
