const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: '123456',
})

db.connect((err) => {
	if(err){
		throw err;
	}
	console.log('MySql Connected...');
});

const app = express();

app.get('/createdb', (req, res) => {
	let sql = 'CREATE DATABASE WUC';
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Database created...');
	});
});

app.listen('3000', () => {
	console.log('Server started on port 3000');
});