const assert = require('assert')

const express = require('express')
const supertest = require('supertest')

const Router = require('../lib')

describe('class Router', () => {
    let router = null
    let server = null
    let request = null
    let app = express()

    before(function(done){
        server = app.listen(done)
        request = supertest.agent(server)
    })

    after(function(done){
        server.close(done)
    })

    it('constructor()', () => {
        router = Router()
    })

    it('get()', () => {
        router.get('/api', async (req, res) => {
            res.json({
                name: 'hulk'
            })
        })
    })

    it('post()', () => {
        router.post('/api', async (req, res) => {
            throw Error('oops')
        })
    })

    it('put()', () => {
        router.put('/api', async (req, res) => {
            res.json({})
        })
    })

    it('patch()', () => {
        router.patch('/api', async (req, res) => {
            res.json({})
        })
    })

    it('delete()', () => {
        router.delete('/api', async (req, res) => {
            res.json()
        })
    })

    it('express.use()', () => {
        app.use('/', router.express)
        app.use((err, req, res, next) => {
            res.status(500).send()
        })
    })

    it('request get', (done) => {
        request.
        get('/api').
        expect(200, {
            name: 'hulk'
        }, done)
    })

    it('request post', (done) => {
        request.
        post('/api').
        expect(500, done)
    })

    it('request put', (done) => {
        request.
        put('/api').
        expect(200, done)
    })

    it('request patch', (done) => {
        request.
        patch('/api').
        expect(200, done)
    })

    it('request delete', (done) => {
        request.
        delete('/api').
        expect(200, done)
    })
})
