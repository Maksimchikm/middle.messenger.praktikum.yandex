const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.get('/messenger', (req, res) => {
	res.sendFile(`/messenger.html`, {root: __dirname + `/dist`,});
});
app.get('/login', (req, res) => {
	res.sendFile(`/login.html`, {root: __dirname + `/dist`,});
});
app.get('/register', (req, res) => {
	res.sendFile(`/register.html`, {root: __dirname + `/dist`,});
});
app.get('/profile', (req, res) => {
	res.sendFile(`/profile.html`, {root: __dirname + `/dist`,});
});
app.get('/404', (req, res) => {
	res.sendFile(`/404.html`, {root: __dirname + `/dist`,});
});
app.get('/500', (req, res) => {
	res.sendFile(`/500.html`, {root: __dirname + `/dist`,});
});
app.get('/', (req, res) => {
	res.sendFile(`/index.html`, {root: __dirname + `/dist`,});
});

app.listen(PORT, () => {
	console.log(`Приложение запущено на ${PORT} порту`);
})