import { randomBytes } from 'node:crypto';

function getData() {
    return randomBytes(20);
}

// console.log(getData());

export default {
    getData,
};