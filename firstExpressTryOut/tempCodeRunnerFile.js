const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
var fs = require("fs")
const port = 8080;



router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.use('/', router);
app.listen(process.env.port || 8080)

/*http.createServer(function (req, res) {
    fs.readFile("./demo.html", function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080)*/