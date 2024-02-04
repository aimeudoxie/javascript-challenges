function removeDuplicates(array) {
    const uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray;
}

const originalArray = [1, 2, 3, 4, 2, 5, 6, 1];
const uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray); 

