const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/view/index.html'))
app.get('/api', (req, res) => res.json({name:"kirans first app", version:"2.0"}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))