const {Pool} = require('pg').native;

const pool = new Pool({

});

pool.connect().then(client => console.log('ok'));