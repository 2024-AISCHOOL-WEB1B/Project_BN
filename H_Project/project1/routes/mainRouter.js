const express = require("express");
const router = express.Router();
const conn = require("../project1/config/db");

router.get("/", (req,res)=> {
    if(req.session.nick){
        res.render("main",{nick : req.session.nick})
    } else {
        res.render("main")
    }
})

// 사용자가 회원가입을 요청했을 때
router.get("/register", (req,res)=>{
    res.render("register")
})

// 사용자가 로그인을 요청했을 때
router.get("/login", (req,res)=>{
    res.render("login")
})

// 마이페이지 이동
router.get("/mypage", (req,res)=>{
    res.render("mypage")
    console.log("정보수정페이지 이동")
})


// 사용자가 정보수정을 요청했을 때
router.get("/updateRegister", (req,res)=>{
    console.log("정보수정페이지 이동")
    res.render("updateRegister")
})

// 사용자가 회원탈퇴를 요청했을 때
router.get("/deleteAccount", (req,res)=>{
    res.render("deleteAccount")
})


// 가게 누르면 상세 페이지로(비동기)
router.get("/wishList", (req,res)=>{
    res.render("wishList")
})

// 검색을 누르면 추천 페이지(비동기) - 서버 연결




module.exports = router;