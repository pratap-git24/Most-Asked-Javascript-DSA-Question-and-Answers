// find the longest string from an array

// solution 1
function longestArr(str){
    let words = str.split(" ");
    let word = words.sort((a,b)=>console.log(a.length-b.length))
    return word[words.length-1];
}

console.log(longestArr("My profession is develop software"));

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

// Solution 3

function longestWord(str){
    let words = str.split(" ")
    let longestWord = "";
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(longestWord("DSA is too easy"));
