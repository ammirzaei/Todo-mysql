const express = require("express");
const app = express();

const { setStatics } = require("./Utils/statics");
const sequelize = require('./Models/database');
const adminRoutes = require("./Routes/admin");
const homeRoutes = require('./Routes/home');

/// Middleware
app.use(express.urlencoded({ extended: false }));

/// Template engine
app.set("view engine", "ejs");
app.set("views", "Views");

/// Statics
setStatics(app);

/// Routers
app.use("/Admin", adminRoutes);
app.use(homeRoutes);

sequelize.sync().then(() => {
    app.listen(8000, () => console.log("Server Running"));
}).catch(err => {
    console.log(err);
})
