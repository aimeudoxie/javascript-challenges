function objectToArray(obj) {
    const keyValueArray = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyValueArray.push([key, obj[key]]);
        }
    }

    return keyValueArray;
}

const sampleObject = { name: 'eudoxie', age: '10', gender: 'female' };
const keyValuePairs = objectToArray(sampleObject);
console.log(keyValuePairs);