// sort array without using inbuild method

function sortingArr(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortingArr([1,3,2,4]));
