function binarySearch(arr,target){
    let left = 0;
    let right = arr.length -1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] === target) return mid;
        if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1
        }
    }
    return "did not match";
}

console.log(binarySearch([1,2,3,4,5],6));
