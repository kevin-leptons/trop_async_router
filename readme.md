# async_router

Asynchronous Router for Express - Make async/await handlers simple.

# Features

* Wrap handlers, allow async/await calling.

# Usage

```js
const Router = require('@trop/async_router')
const express = require('express')

let router = new Router()

router.
get('/', async(req, res) => {
    let items = await service.fetch()
    res.json(items)
})

let app = express()

app.use('/api', router.express)
app.listen(8080)
```

* `service.fetch()`, an async operation.
* `router.express`, retrieve express router.

# Documents

* [Changelog](changelog.md)
* [Contribution](contribution.md)
* [APIs](doc/api.md)
* [Development](api/dev.md)
* [express](https://expressjs.com/)
