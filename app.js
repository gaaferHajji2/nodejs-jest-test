const crypto = require('node:crypto');

function getData() {
    return crypto.randomBytes(20);
}

// console.log(getData());

module.exports = {
    getData,
};