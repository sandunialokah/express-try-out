const express = require("express");
const path = require("path");
//const router = express.Router();

const app = express();
const port = 8080;

/*app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
    res.render("index");

});

app.use("/", router);
app.listen(process.env.port || 8080);

console.log("Running at port 8080")*/



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/express/index.html'));
})

app.listen(port, () => {
    console.log(`${port}`)
})

