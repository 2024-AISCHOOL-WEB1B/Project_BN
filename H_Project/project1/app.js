const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

const path = require("path")

const bp = require("body-parser");
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");
const session = require("express-session");
const fileStore = require('session-file-store')(session);
const db = require("./config/db")


// css 출력
app.use(express.static(path.join(__dirname, 'public')));


// post 데이터 처리 등록
app.use(bp.urlencoded({extended : true}));

// 세션 설정
app.use(session({
    httpOnly : true,
    resave : false,
    secret : "secret",
    store : new fileStore(),
    path : './sessions',
    saveUninitialized : false
}))

// 라우터 등록
app.use("/", mainRouter);
app.use("/user", userRouter);

// 넌적스 셋팅
app.set("view engine", "html")
nunjucks.configure("views", {
    express : app,
    watch : true
});

// json 삭제 요청 본문을 처리 등록
app.use(express.json());



// API 엔드포인트
//app.get('/recommend', (req, res) => {
   // const recommendations = recommendRestaurants(userPreferences);
   // res.json(recommendations);
//});


app.listen(3000);


