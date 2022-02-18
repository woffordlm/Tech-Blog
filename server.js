const express = require('express');
const routes = require('./controllers');
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3003;
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

// sync sequelize models to the database, then turn on the server
 sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})