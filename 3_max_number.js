function findMax(arr) {
    if (arr.length === 0) {

        console.error("Array is empty");
        return;
    }

    let max = arr[0];  

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];  
        }
    }

    return max;
}
const numbers = [3, 7, 1, 9, 5, 2];
console.log(findMax(numbers));