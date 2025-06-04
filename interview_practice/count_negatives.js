const arr = [4, -2, 0, 10, -8, 30];

const countNegatives = (arr) => {
    let total = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            total += 1;
        }
    }
    return total;
}

console.log(countNegatives(arr));
