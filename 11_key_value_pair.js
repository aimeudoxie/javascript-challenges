function shareKeyValuePair(obj1, obj2) {
    for (let key in obj1) {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            return true;
        }
    }

    return false;
}

const object1 = { key1: 'value1', key2: 'value2', key3: 'value3' };
const object2 = { key2: 'value2', key4: 'value4', key5: 'value5' };

const sharePair = shareKeyValuePair(object1, object2);
console.log(sharePair);  
