let arr = [5, 0, 10, 8, 17, 1];

const findLargest = (arr) => {
    let largestNo = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largestNo) {
            largestNo = arr[i];
        }
    }
    return largestNo;
}

console.log(findLargest(arr));