//check two string are anagrams or not

function anagrams(str1,str2){
    const sortString = str => str.toLowerCase().split('').sort().join('');

    return sortString(str1) === sortString(str2)
}

console.log(anagrams("listen","silent"))