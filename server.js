const express = require('express');
//const { sequelize } = require('./models/Product');
const routes = require('./routes');
// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// Added sequalize sync code based off of answer I found on google search.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => { // put the app.listen code into the sync code
    console.log(`App listening on port ${PORT}!`);
  });
})

