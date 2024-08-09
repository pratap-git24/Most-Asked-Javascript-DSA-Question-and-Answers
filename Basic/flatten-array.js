const arr = [1,2,[3,4,[5,6],7,8]]
let output = "";
function flatten(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatten(arr[i])
        }
        else{
            output += arr[i];
        }
    }
    return output;
}

console.log(flatten(arr))

// second method

function flatArr(arr){
    let newArr = []
    arr.map(element=>{
        if(Array.isArray(element)){
            newArr = newArr.concat(flatArr(element))
        }
        else{
            newArr.push(element)
        }
    })
    return newArr;
}

console.log(flatArr(arr))