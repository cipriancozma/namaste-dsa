const arr = [4, 2, 0, 10, 8, 30];

const searchElement = (arr, elem) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == elem) {
            return i;
        }
    }
    return -1;
}

console.log(searchElement(arr, 4));
console.log(searchElement(arr, 10));
console.log(searchElement(arr, 49));