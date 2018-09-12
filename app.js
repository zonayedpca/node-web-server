const express = require('express'),
      app = express(),
      { port } = require('./config');

app.set('view engine', 'ejs');
app.use(express.static('public'));

require('./routes')(app);

app.listen(port, () => {
  console.log(`Your server is running at port: ${port}`);
});
