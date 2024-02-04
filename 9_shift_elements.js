function shiftArrayLeft(arr) {
    if (arr.length <= 1) {
        // No need of shiftting if the array has 0 or 1 element
        return arr;
    }

    const firstElement = arr.shift();  

    arr.push(firstElement);  

    return arr;
}

const originalArray = [1, 2, 3, 4, 5];
const shiftedArray = shiftArrayLeft(originalArray);
console.log(shiftedArray);  
