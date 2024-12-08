const express = require('express');
const path = require('path');
const bodyParset = require('body-parser');
const static = require('serve-static');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParset.json());
app.use('/', static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    const paramld = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;

    res.status(200).send(
        `<h1>서버에서 응답한 결과</h1>
        <div><p>Param id : ${paramId}</p></div>
        <div><p>Param password : ${paramPassword}</p></div>
        <br><br><a href = "/login1.html">로그인 페이지로 돌아가기</a>
        `);
});

