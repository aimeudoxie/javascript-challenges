function countProperties(obj) {
    let count = 0;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }

    return count;
}

const sampleObject = { name: 'eudoxie',gender: 'female'};
const numberOfProperties = countProperties(sampleObject);
console.log(numberOfProperties);  
