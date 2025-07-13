const crypto = require("node:crypto");

const { getData } = require("../app");

test("Test Spy On", async () => {

    jest.spyOn(crypto, "randomBytes").mockImplementation(() => Promise.resolve("bytes"));

    const res1 = await getData();

    expect(res1).toBe("bytes")

    console.log("The Res1 is: ", res1);

});