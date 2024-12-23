const crypto = require('node:crypto');

const { getData } = require('../app')

test('Test Spy On', async () => {

    jest.spyOn(crypto, 'randomBytes').mockResolvedValueOnce("bytes");

    const res1 = await getData();

    console.log("The Res1 is: ", res1);

});