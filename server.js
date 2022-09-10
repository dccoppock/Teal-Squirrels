const express = require("express");
const session =require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess ={
    secret: 'keep your password safe',
    cookie: {},
    resave: false,
    saveUnitialized:true,
    store: new SequelizeStore({
        db: sequelize,
    });
},

const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require("./ config/connection");
const controllers = require("./controllers");
const {Poem, User} = require("./models");

app.use (express.json());
app.use(express.urlencoded({ extended: true}));


app.use(controllers);


sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, () => console.log("doing the thing fr fr"));
});
}