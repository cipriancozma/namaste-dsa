let arr = [5, 0, 10, 8, 17, 1, 23];

const secondLargestNum = (arr) => {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargestNum(arr));