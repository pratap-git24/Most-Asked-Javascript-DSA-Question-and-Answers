function countChar(str,char){
    let str2 = str.split("");
    let count = 0;
    for(let i = 0; i < str2.length; i++){
        if(str2[i].toLowerCase() === char){
            count++
        }
    }
    return count;
}

console.log(countChar("Poooja",'Ja')); 

// solution 2 

