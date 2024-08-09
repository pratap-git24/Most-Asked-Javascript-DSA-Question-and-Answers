function findLargestNum(arr){
    let largest = arr[0];
    for(var i = 1 ; i < arr.length ;i++ ){
       // console.log(arr[i]);
        if(largest < arr[i]){
            
            //console.log(firstNum);
            largest = arr[i]
        }
    }
    console.log(largest);
}

const arr = [2,6,3,8,1]

findLargestNum(arr)