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

describe("Register User Tests", () => {
    it("success", async () => {
        
    })
})