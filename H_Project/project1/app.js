const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const bp = require("body-parser");
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");
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


// 샘플 음식점 데이터
const restaurants = [
    { id: 1, name: '이탈리안 레스토랑', cuisine: '이탈리안', rating: 4.5 },
    { id: 2, name: '중국 음식점', cuisine: '중국', rating: 4.0 },
    { id: 3, name: '일본 스시', cuisine: '일본', rating: 5.0 },
    { id: 4, name: '한국 BBQ', cuisine: '한국', rating: 4.8 },
    { id: 5, name: '멕시코 타코', cuisine: '멕시코', rating: 4.2 }
];

// 사용자 선호도 예시 (cuisine: 음식 종류)
const userPreferences = {
    cuisine: '일본', // 사용자가 선호하는 음식 종류
};

// 추천 알고리즘
function recommendRestaurants(preferences) {
    return restaurants.filter(restaurant => restaurant.cuisine === preferences.cuisine);
}

// API 엔드포인트
app.get('/recommend', (req, res) => {
    const recommendations = recommendRestaurants(userPreferences);
    res.json(recommendations);
});


app.listen(3000);


