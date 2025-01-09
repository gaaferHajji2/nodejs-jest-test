
const authUser = {
    user1: true,
    user2: false
};

const products = {
    product1: "Name-Here",
    product2: null,
}

beforeAll(()=>{
    console.log("Before All Tests In Separated Way.");
});

afterAll(()=>{
    console.log("After All Tests In Separated Way.");
});

beforeEach(()=>{
    console.log("Before Each In Separated Way");
});

afterEach(()=>{
    console.log("After Each In Separated Way");
});

describe('Auth Test', () => {

    beforeAll(()=>{
        console.log("Before All Tests In Auth Test.");
    });
    
    afterAll(()=>{
        console.log("After All Tests In Auth Test.");
    });

    beforeEach(()=>{
        console.log("Before Each In Auth Test");
    });
    
    afterEach(()=>{
        console.log("After Each In Auth Test");
    });

    it("Test First User", () => {

        console.log("1");

        expect(authUser.user1).toBeTruthy();

    });

    it("Test Second User", ()=>{

        console.log("2");

        expect(authUser.user2).toBeFalsy();

    });

});

describe("Test Products", () => {

    beforeAll(()=>{
        console.log("Before All Tests In Test Products.");
    });
    
    afterAll(()=>{
        console.log("After All Tests In Test Products.");
    });

    beforeEach(()=>{
        console.log("Before Each In Test Products.");
    });
    
    afterEach(()=>{
        console.log("After Each In Test Products.");
    });

    it("Test Products-01", ()=>{

        console.log("3");

        expect(products.product1).toBeDefined();
    });

    it("Test Product-02", () => {

        console.log("4");

        expect(products.product2).toBeNull();
    });

});