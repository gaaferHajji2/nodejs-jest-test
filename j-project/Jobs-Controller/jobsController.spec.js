import Job from '../models/jobs'

let job = {
    _id: '123',
    title: "JLoka-01",
    description: "Simple-Description-01",
    email: "j@loka.com",
    address: "JLoka-01",
    company: "hell",
    industry: ['Business', 'Information Technology', 'Education/Training'],
    positions: 11,
    salary: 500000,
    postingDate: 'Wed Oct 15 2025 11:22:04 GMT+0300 (GMT+03:00)',
    user: '456'
}

let mockReq = () => {
    return {
        body: {},
        query: {},
        params: {},
        user: {}
    }
}

let mockRes = () => {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    }
}

describe('get job/s', () => {

    it('', () => {

    })

})