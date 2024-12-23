

test("Mock Implementation", () => {

    const mockFn = jest.fn(() => "default")
    .mockImplementation(() => "First Call")
    .mockImplementation(() => "2nd Call") // This Will Remove The 1st Implementation
    ; 

    const res1 = mockFn();

    const res2 = mockFn();

    console.log("The Res1 Is: ", res1);

    console.log("The Res2 Is: ", res2);

});

test("Mock Implementation Once", () => {

    const mockFn = jest.fn(() => "default")
    .mockImplementationOnce(() => "First Call")
    .mockImplementationOnce(() => "2nd Call")
    ; 

    const res1 = mockFn();

    const res2 = mockFn();

    const res3 = mockFn();

    console.log("The Res1 Is: ", res1);

    console.log("The Res2 Is: ", res2);

    console.log("The Res3 Is: ", res3);

});