
let express = require('express');
let bodyparser = require('body-parser');
let fs = require('fs');

let app = express();
app.use(bodyparser.json());

app.get('/hithere', (req, res) => {

	let query = req.query;

	res.json({
		a : 5,
		b: 'hi',
		query
	});
});

app.get('/test1', (req, res) => {

	let filename = `${__dirname}${req.url}.html`;//'.' + req.url;
	//res.send(filename);

	fs.readFile(filename, (e, d) => {
		if(e) res.send(e + '');
		else res.send(d + '');
	});
});

app.get('/test2', (req, res) => { //fake page that doesn't exist
	let filename = `${__dirname}${req.url}.html`;

	fs.readFile(filename, (e, data) => {
		if (e) return res.send(e + '');
		res.send(data);
	});
});

let user1 = {
	'username': "billy",
	'password': "1234"
};

app.get('/login', (req, res) => res.sendFile(__dirname + '/login.html'));

//check login data for correctness
app.post('/action', (req, res) => {

	let bod = req.body;
	//res.send(JSON.stringify(bod
	//console.log(bod.username + '\n' + bod.password);

	if(bod.username == user1.username && bod.password == user1.password) {
		//localStorage.setItem('username', bod.username);
		//res.redirect('/test1');
		//window.location.href = 'localhost:3002/test1';
		//return console.log("you did it " + bod.username);
		return res.json(Object.assign({}, bod, {status: 'ok'}))
		//res.send();
		//res.json("you did it " + bod.username);
	}
	res.json(Object.assign({}, bod, {status: 'fail'}))
	//res.send("you didn't do it " + bod.username);

});

app.post('/abc', (req, res) => {

	res.json(Object.assign(req.body, {
		response: 'cool'
	}));

});

app.use(express.static(__dirname));

app.listen(3002);

console.log('listening on 3002');
