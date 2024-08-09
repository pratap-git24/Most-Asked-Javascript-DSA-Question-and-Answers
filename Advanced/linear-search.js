// linear search

function linearSearch(arr,target){
        
    for(let i=0 ; i< arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1; // not found
}

console.log(linearSearch([10,30,20,40,50],30));
