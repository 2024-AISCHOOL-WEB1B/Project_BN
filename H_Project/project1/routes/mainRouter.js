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
    res.render("register")
})

// 사용자가 로그인을 요청했을 때
router.get("/login", (req,res)=>{
    res.render("login")
})

// 사용자가 로그아웃을 요청했을 때
router.get("/logout",(req,res)=>{
    res.render("logout")
})

// 마이페이지 이동
router.get("/mypage", (req,res)=>{
    if(req.session.nick){
        res.render("mypage", { 
            nick: req.session.nick,
            email: req.session.email
         });
    } else {
        res.render("mypage")
    } 
    console.log("마이페이지 이동")
})


// 사용자가 정보수정을 요청했을 때
router.get("/updateRegister", (req,res)=>{
    if(req.session.nick){
        res.render("updateRegister", { 
            nick: req.session.nick,
            email: req.session.email
         });
    } else {
        res.render("updateRegister")
    } 
    console.log("정보수정페이지 이동")
})

// 사용자가 회원탈퇴를 요청했을 때
router.get("/deleteAccount", (req,res)=>{
    res.render("deleteAccount")
})


// 찜 목록 이동
router.get("/wishList", (req,res)=>{
    if(req.session.nick){
        res.render("wishList", { 
            nick: req.session.nick,
            email: req.session.email
         });
    } else {
        res.render("wishList")
    } 
})




module.exports = router;