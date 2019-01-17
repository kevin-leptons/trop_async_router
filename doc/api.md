# Router

```js
const Router = require('@trop/async_router')
```

## Router(options)

It is the same with [express.Router](https://expressjs.com/en/4x/api.html#express.router)

## METHOD(path, handler)

* `path` / `string`. Correspond request path.
* `handler` / `function(req, res)`. Handler function.

`METHOD` can be one of `get`, `post`, `put`, `patch`, `delete`.

## get express()

Return express router.
