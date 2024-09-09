const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const SortMidleware  = require('./app/middlewares/sortMiddleware')

const app = express();
const port = 3000;

// router
const route = require('./routes');
// datebase
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan('combined'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

// custom Misdlewares
app.use(SortMidleware);
app.use(express.json());

app.use(methodOverride('_method'));

app.engine('handlebars', handlebars.engine({
    helpers: require('./helpers/handlebars')
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http:/localhost:${port}`);
});
