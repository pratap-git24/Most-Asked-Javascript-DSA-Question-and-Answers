// missing number in an array

function missingNum(arr){
    let n = arr.length;
    
    let totalSum = (n*(n+1))/2;
    let arrSum = arr.reduce((acc,sum)=>acc+sum,0);

    return totalSum - arrSum;

}

console.log(missingNum([0,1,2,4]));