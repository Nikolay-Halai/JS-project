const express = require('express'),
  morgan = require('morgan'),
  app = express();

app.use(morgan('common'));
// See: https://expressjs.com/en/4x/api.html#express.static
app.use(express.static('public', {
  extensions: ['html', 'htm']
}));

app.listen(3000, () => console.log('Server has been started...'));