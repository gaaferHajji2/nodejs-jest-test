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

const mockRes = () => {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
    }
}

describe('Register User Tests', () => {
    it('success', async () => {

        jest.spyOn(bcrypt, 'hash').mockResolvedValueOnce('JLoka-01')
        jest.spyOn(User, 'create').mockResolvedValueOnce({ _id: 1 })
        // This will be ovverrided by the jest.mock
        jest.spyOn(jwt, 'sign').mockResolvedValueOnce('JLoka-Token-01')

        const t4 = mockReq()
        const t5 = mockRes()

        await registerUser(t4, t5)
        
        // const res1 = await t1()
        // const res2 = await t2()
        // const res3 = await t3()

        // console.log('The Res1: ', res1)
        // console.log('The Res2: ', res2)

        // expect(res1).toBe('JLoka-01')
        // expect(res2).toMatchObject({ '_id': 1 })
        // expect(res3).toBe('JLoka-Token-01')
    })
})