import { registerUser } from './authController'

const mockReq = () => {
    return {
        body: {
            name: 'jloka-01',
            email: 'test@test.com',
            password: 'test@123'
        }
    }
}

const mockRes = () => {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
    }
}

describe("Register User Tests", () => {
    it("success", async () => {
        const t1 = await registerUser(mockReq, mockRes)
        console.log("The result from register user is: ", t1)
    })
})