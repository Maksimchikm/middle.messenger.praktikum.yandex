const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'src/pages'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/static'));

app.get('/messenger', (req, res) => {
	res.render('messenger')
});
app.get('/login', (req, res) => {
	res.render('login')
});
app.get('/register', (req, res) => {
	res.render('register')
});
app.get('/profile', (req, res) => {
	res.render('profile')
});
app.get('/404', (req, res) => {
	res.render('404')
});
app.get('/500', (req, res) => {
	res.render('500')
});
app.get('/', (req, res) => {
	res.render('index');
});

	// Заготовка на будущее
	// .use('/', (err, req, res) => {
	// 	console.error(err.stack)
	// 	res.status(404).render('404');
	// })
	// .use('/', (err, req, res) => {
	// 	console.error(err.stack)
	// 	res.status(500).render('500');
	// })


app.listen(PORT, () => {
	console.log(`Приложение запущено на ${PORT} порту`);
})