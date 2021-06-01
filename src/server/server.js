const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;
const TEMPLATES_PATH = path.resolve(__dirname, '../templates');

app.set('views', TEMPLATES_PATH)
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.render('index', {title: 'Hello', message: 'Poshel nahui'});
});

app.listen(PORT, () => console.log(`Server starts on ${PORT}`));