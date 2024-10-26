//find the vowel in a string and convert them to uppercase

function findVowels(str){
    let arrOfChar = str.split("");
    
    let vowels = ['a','e','i','o','u'];

    for(let i=0 ; i < arrOfChar.length; i++){
        
        if(vowels.includes(arrOfChar[i])){
            arrOfChar[i] = arrOfChar[i].toUpperCase()
        }
    }
    return arrOfChar.join()
}

console.log(findVowels("pooja"));
