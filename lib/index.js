const express = require('express')

class Router {
    constructor(options) {
        this._router = express.Router(options)
    }

    get(path, handler) {
        this._router.get(path, _wrap_handler(handler))
    }

    post(path, handler) {
        this._router.post(path, _wrap_handler(handler))
    }

    put(path, handler) {
        this._router.put(path, _wrap_handler(handler))
    }

    patch(path, handler) {
        this._router.patch(path, _wrap_handler(handler))
    }

    delete(path, handler) {
        this._router.delete(path, _wrap_handler(handler))
    }

    get express() {
        return this._router
    }
}

function _wrap_handler(handler) {
    return (req, res, next) => {
        Promise.resolve(handler(req, res)).
        catch(next)
    }
}

module.exports = (options) => {
    return new Router(options)
}
