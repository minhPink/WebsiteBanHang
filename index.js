const express = require('express');
const methodOverride = require('method-override');
var flash = require('express-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
const database = require("./config/database");

require('dotenv').config();

const route = require('./routers/client/index.route');
const routerAdmin = require('./routers/admin/index.router');

const systemConfig = require("./config/system");

database.connect();

const app = express();
const port = process.env.PORT;
app.use(methodOverride('_method'));
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'))

// App Locals Variable
app.locals.prefixAdmin = systemConfig.prefixAdmin;

// Flash
app.use(cookieParser('HHSDHSDHHSH'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
// End Flash

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Route
route(app);
//RouteAdmin
routerAdmin(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})