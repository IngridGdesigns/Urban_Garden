const express = require('express')
const app = express()
const PORT = 3005

app.get('/', (req, res ) => res.send('Hello World!'))

app.listen(port, () => console.log(`We are live from the Bay on port ${PORT}`))
