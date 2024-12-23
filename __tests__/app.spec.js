
const crypto = require('node:crypto');

const { getData } = require("../app");


jest.mock('node:crypto');

test("Fetch Data", async () => {

    // const res = getData();

    // console.log(res);

    crypto.randomBytes.mockResolvedValueOnce('bytes');

    const res = await getData();

    console.log("The Result is: ", res);

});