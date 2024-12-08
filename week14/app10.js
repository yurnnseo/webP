const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const router = express.Router();
const sys_handler = function(req, res, next){
    console.log('/process/login 처리');

    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;

    res.status(200).send(
        `<h1>서버에서 응답한 결과</h1>
        <div><p>Param id : ${paramId}</p></div>
        <div><p>Param password : ${paramPassword}</p></div>
        <br><br><a href = "/login.html">로그인 페이지로 돌아가기</a>
        `);
};

router.route('/process/login').post(sys_handler);
router.route('/process/login').get(sys_handler);
app.use('/', router);
app.listen(3000);
