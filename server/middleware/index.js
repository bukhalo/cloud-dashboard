// import 'config/sentry';
const express = require('express')
// import logger from 'routes/middlewares/logger';
const bodyParser = require('./body-parser')
const cookieParser = require('./cookie-parser')
// import session from 'routes/middlewares/session';
// import passport from 'routes/middlewares/passport';
const apolloServer = require('./apollo-server')

const app = express()

// app.use(logger);
app.use(bodyParser)
app.use(cookieParser)
// app.use(session);
// app.use(passport);
app.use(apolloServer)

module.exports = app
