
var express = require('express')
    , app = express()
    , server = require("http").createServer(app)

app.use(express.static(__dirname + '/public'));


//require("./drone/getVideo");
require("./drone/controller");
console.log("00000>>>");
app.listen(3000);






