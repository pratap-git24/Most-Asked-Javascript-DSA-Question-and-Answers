// find the longest string from an array

// solution 1
function longestArr(str){
    let words = str.split(" ");
    let word = words.sort((a,b)=>b.length-a.length)
    return word[0];
}

console.log(longestArr("My name is pratap"));

// solution 2
function longestArr2(str){
    let words = str.split(" ");
    let longestWord = words.reduce((longest,currWord)=>{
        //return longest.length > currWord.length ? longest : currWord
        return currWord.length < longest.length ? longest : currWord;
    },'')
    return longestWord;
}

console.log(longestArr2("My name is laxman"));