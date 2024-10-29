//Question: Write a function to find the intersection of two arrays.

function intersection(arr1,arr2){
    let set1 = new Set(arr1)
    let set2 = new Set(arr2)

    let intersectionSet = new Set([...arr1].filter((x)=>set2.has(x)))

    return Array.from(intersectionSet)
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));

// Solution 2

function intersectionTwoArr(arr1,arr2){
    return arr1.filter(item=>arr2.indexOf(item) !== -1)
}

console.log(intersectionTwoArr([1, 2, 3, 4], [3, 4, 5, 6]));