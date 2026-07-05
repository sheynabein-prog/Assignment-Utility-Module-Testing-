function sum(a, b) {
    return a + b;
}

function createuser(name, age) {
    return {
        name: name,
        age: age,
        createdAt: new Date()
    };
}

function findInArray(arr, value) {
    return arr.indexOf(value) !== -1;
}

function approximateDivision(a, b) {
    return a / b;
}

function parseJSON(jsonString) {
    if (!jsonString) {
        throw new Error('No JSON string provided')
    }

    return JSON.parse(jsonString);
}

module.exports = { sum, createuser, findInArray, approximateDivision, parseJSON };