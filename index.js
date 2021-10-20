
const express = require("express");

const app = express();
app.use(express.json());

const usersRoutes = require("./routes/usersRoutes");

app.use("/users", usersRoutes);

app.listen(4000, () => {
    require("dotenv").config();

    console.log("Hello world");
});

