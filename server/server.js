const express = require('express');
const app = express();
const path = require('path');

const { logger } = require('./middlewares/logger');
app.use('/', require('./routes/root'));

const PORT = process.env.PORT || 5001;

app.use(logger);
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/public')));


app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({message: '404 Not found'})
  } else {
    res.type('txt').send('404 Not found')
  }
});

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));