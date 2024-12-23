
const { getData } = require("../app");

test("Fetch Data", () => {

    const res = getData();

    console.log(res);

})