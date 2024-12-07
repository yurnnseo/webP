const bodyParset = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParset.json());

const path = require('path');
const static = require('serve-static');
app.use('/', static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    const paramld = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;

    res.status(200).send(
        `<h1></h1>
        <div></div>
        `);
});
