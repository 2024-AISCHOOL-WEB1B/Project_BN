const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const bp = require("body-parser");
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");
const session = require("express-session");
const fileStore = require('session-file-store')(session);const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

// css 출력
app.use(express.static(path.join(__dirname, 'public')));

// 정적 파일 제공 (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// 기본 라우트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// post 데이터 처리 등록
app.use(bp.urlencoded({extended : true}));

// 세션 설정
app.use(session({
    httpOnly : true,
    resave : false,
    secret : "secret",
    store : new fileStore(),
    saveUninitialized : false
}))

// 라우터 등록
app.use("/", mainRouter);
app.use("/user", userRouter);
// app.use("/cookie",cookieRouter);
// app.use("/session",sessionRouter);


// 넌적스 셋팅
app.set("view engine", "html")
nunjucks.configure("views", {
    express : app,
    watch : true
});



/////////// 여기서부터 api 엔드포인트 전까지 login/ logout 테스트


// API 엔드포인트
//app.get('/recommend', (req, res) => {
   // const recommendations = recommendRestaurants(userPreferences);
   // res.json(recommendations);
//});



// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});


