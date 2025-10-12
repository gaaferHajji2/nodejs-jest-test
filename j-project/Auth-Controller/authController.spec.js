import bcrypt from 'bcryptjs'

import User from '../models/users'
import jwt from 'jsonwebtoken'
import { registerUser } from './authController'
import { getJwtToken } from '../utils/helpers'

// This will override the result from jwt.sign
jest.mock('../utils/helpers.js', () => ({
    getJwtToken: jest.fn(() => 'JLoka-Token-02')
}))

const mockReq = () => {
    return {
        body: {
            name: 'jloka-01',
            email: 'test@test.com',
            password: 'test@123'
        }
    }
}

const mockInValidReq= () => {
    return {
        body: {
            name: "Jloka-01",
            email: "test@test.com"
        }
    }
}

const mockRes = () => {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
    }
}

afterEach(() => {
    jest.restoreAllMocks()
})

describe('Register User Tests', () => {
    it('success', async () => {

        jest.spyOn(bcrypt, 'hash').mockResolvedValueOnce('JLoka-01')
        jest.spyOn(User, 'create').mockResolvedValueOnce({ _id: 1 })
        // This will be overridden by the jest.mock
        jest.spyOn(jwt, 'sign').mockResolvedValueOnce('JLoka-Token-01')

        const t1 = mockReq()
        const t2 = mockRes()

        await registerUser(t1, t2)
        
        // const res1 = await t1()
        // const res2 = await t2()
        // const res3 = await t3()

        // console.log('The Res1: ', res1)
        // console.log('The Res2: ', res2)

        // expect(res1).toBe('JLoka-01')
        // expect(res2).toMatchObject({ '_id': 1 })
        // expect(res3).toBe('JLoka-Token-01')

        expect(t2.status).toHaveBeenCalledWith(201)
        expect(t2.json).toHaveBeenCalledWith({ token: 'JLoka-Token-02' })
        expect(bcrypt.hash).toHaveBeenCalledWith('test@123', 10)
        expect(User.create).toHaveBeenCalledWith({
            name: 'jloka-01',
            email: 'test@test.com',
            password: 'JLoka-01'
        })
    })

    it('validation-01', async () => {
        let invalidReq = mockInValidReq()
        let res = mockRes()

        await registerUser(invalidReq, res)

        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({
            error: "Please enter all values",
        })
    })

    it('validation-02', async () => {

        jest.spyOn(bcrypt, 'hash').mockResolvedValueOnce('JLoka-01')
        jest.spyOn(User, 'create').mockRejectedValueOnce({ code: 11000 })

        let t1 = mockReq()
        let t2 = mockRes()

        await registerUser(t1, t2)

        // console.log("The res is: ", t2.status)

        expect(t2.status).toHaveBeenCalledWith(400)
        expect(t2.json).toHaveBeenCalledWith({
            error: "Duplicate email",
        })
    });
})

describe('Login User', () => {
    it('success', async () => {

    })
})