const pug = require('pug');

const tmpl = './chat.pug';

const renderList = pug.renderFile(tmpl);

const root = document.querySelector('.root');
root.innerHTML = `${renderList}`;