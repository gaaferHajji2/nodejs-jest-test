
const { randomBytes } = require('node:crypto');

const { getData } = require("../app");

jest.mock('node:crypto');

test("Fetch Data", async () => {

    // const res = getData();

    // console.log(res);

    randomBytes.mockResolvedValueOnce('bytes');

    const res = await getData();

    console.log("The Result is: ", res);

});

test("Fetch Data With Mocking", async () => {

    randomBytes.mockImplementationOnce(() => Promise.resolve("bytes-02"));

    const res = await getData();

    console.log("The Result Of 2nd is: ", res);

});