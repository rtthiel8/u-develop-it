const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'RanchMeBr0tendo',
        database: 'election'
    });

module.exports = db;

