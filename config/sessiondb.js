const session = require('express-session');
const config = require('config');
require('custom-env').env('localhost');
const db = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@softeng.w1wfi.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
const MongoDBStore = require('connect-mongodb-session')(session);

const storeSessions = () =>
    new MongoDBStore({
        uri: db,
        collection: 'sessions',
    });

module.exports = storeSessions;
