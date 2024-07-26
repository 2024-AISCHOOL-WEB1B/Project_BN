const express = require("express");
const router = express.Router();

router.get("/", (req,res)=> {
    if(req.session.nick){
        res.render("main",{nick : req.session.nick})
    } else {
        res.render("main")
    }
})

// 사용자가 회원가입을 요청했을 때
router.get("/register", (req,res)=>{
    res.render("login")
})

// 사용자가 로그인을 요청했을 때
router.get("/login", (req,res)=>{
    res.render("login")
})

// 사용자가 정보수정을 요청했을 때
router.get("/updateRegister", (req,res)=>{
    res.render("updateRegister")
})

// 사용자가 회원탈퇴를 요청했을 때
router.get("delete_user", (req,res)=>{
    res.render("delete_user")
})

// 가게 누르면 상세 페이지로(비동기)
router.get("/sangse", (req,res)=>{
    res.render("sangse")
})

// 검색을 누르면 추천 페이지(비동기) - 서버 연결




module.exports = router;