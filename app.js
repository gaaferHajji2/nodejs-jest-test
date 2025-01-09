const { randomBytes } = require('node:crypto');

function getData() {
    return randomBytes(20);
}

// console.log(getData());

module.exports = {
    getData,
};