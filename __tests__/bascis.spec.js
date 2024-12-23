

test('addition', ()=> {
    expect(2+2).toBe(4);
});

// test('addition false', ()=>{
//     expect(2+2).toBe(3);
// });

test('Test Null', () => {
    const i = null;

    expect.assertions(2);

    expect(i).toBeNull();

    expect(i).toBeDefined();
});