import Job from '../models/jobs'

import { getJobs } from './jobsController'

const mockJob01 = {
    _id: '68f9eaae95bb79cf597aa813',
    title: 'JLoka Job-01',
    description: 'Simple JLoka-01 description',
    email: 'jloka@jloka.com',
    address: 'JLoka-01 address',
    company: 'Black Dragons-01',
    industry: ['Information Technology', 'Banking', 'Business', 'Education/Training'],
    positions: 1,
    salary: 500000,
    postingDate: '2025-10-23T08:41:07.116Z',
    user: '68f9ea9d95bb79cf597aa812'
}

const mockJob02 = {
    _id: '68f9ed9295bb79cf597aa814',
    title: 'JLoka Job-02',
    description: 'Simple JLoka-01 description',
    email: 'jloka@jloka.com',
    address: 'JLoka-01 address',
    company: 'Black Dragons-01',
    industry: ['Information Technology', 'Banking', 'Business', 'Education/Training'],
    positions: 1,
    salary: 500000,
    postingDate: '2025-10-23T08:41:07.116Z',
    user: '68f9ed9a95bb79cf597aa815'
}

const mockRequest = () => {
    return {
        body: {},
        query: {},
        params: {},
        user: {}
    }
}

const mockResponse = () => {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()
    }
}

afterEach(() => {
    jest.restoreAllMocks()
})

describe('Get all jobs with/without query data', () => {

    it('get all jobs with success', async ()=> {
        jest.spyOn(Job, 'find').mockReturnValueOnce({
            limit: jest.fn().mockReturnValueOnce({
                skip: jest.fn().mockReturnValue([mockJob01, mockJob02])
            })
        })

        const mockReq = mockRequest()
        const mockRes = mockResponse()

        await getJobs(mockReq, mockRes)

        expect(mockRes.status).toHaveBeenCalledWith(200)
        expect(mockRes.json).toHaveBeenCalledWith({
            jobs: [mockJob01, mockJob02]
        })
    })



})