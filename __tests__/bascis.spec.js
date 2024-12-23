

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

const animals = ['cat', 'dog'];

test('Animals Array', ()=> {
    expect(animals).toContain('cat');

    expect(animals).toBeInstanceOf(Array);
});

function getData() {
    throw new Error('Not Found');
}

test('Test Error Function', ()=>{
    expect(() => getData()).toThrow();
});