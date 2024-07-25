const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const bp = require("body-parser");
const mainRouter = require("./routes/mainRouters");
const userRouter = require("./routes/userRouters");
const session = require("express-session");
const fileStore = require('session-file-store')(session);

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

// 넌적스 셋팅
app.set("view engine", "html")
nunjucks.configure("views", {
    express : app,
    watch : true
})

app.listen(3000);


// const express = require('express');
// const path = require('path');
// const app = express();

// // 정적 파일을 제공할 폴더 설정
// app.use(express.static(path.join(__dirname, 'public')));

// // HTML 파일 제공
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'login.html'));
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
