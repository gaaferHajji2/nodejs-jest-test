
const authUser = {
    user1: true,
    user2: false
};

const products = {
    product1: "Name-Here",
    product2: null,
}

describe('Auth Test', () => {

    it("Test First User", () => {

        expect(authUser.user1).toBeTruthy();

    });

    it("Test Second User", ()=>{

        expect(authUser.user2).toBeFalsy();

    });

});

describe("Test Products", () => {

    it("Test Products-01", ()=>{
        expect(products.product1).toBeDefined();
    });

    it("Test Product-02", () => {
        expect(products.product2).toBeNull();
    });

});