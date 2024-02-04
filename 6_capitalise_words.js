function capitalizeWords(sentence) {
    let result = "";
    let capitalizeNext = true;

    for (let char of sentence) {
        if (capitalizeNext && char !== " ") {
            result += char.toUpperCase();
            capitalizeNext = false;
        } else {
            result += char.toLowerCase();
        }

        if (char === " ") {
            capitalizeNext = true;
        }
    }

    return result;
}

const sentence = "umwari aime eudoxie";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);