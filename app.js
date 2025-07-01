const { randomBytes } = require('node:crypto');

async function getData() {
    return randomBytes(20);
}

// console.log(getData());

module.exports = {
    getData,
};