const express = require('express');
const router = require('./routes');
const cors = require('cors');
const { port } = require('./config');

require('../src/models/index')();

const app = express();
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, (err)=> {
    if(err) console.log(err);
    else console.log(`app is run ${port}`);
})