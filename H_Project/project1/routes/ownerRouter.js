const express = require("express");
const router = express.Router();
const conn = require("../config/db")

// 오너가 회원가입을 요청했을 때
router.get("/register", (req,res)=>{
    res.render("register")
})

// 오너가 로그인을 요청했을 때
router.get("/login", (req,res)=>{
    res.render("login")
})

// 오너가 로그아웃을 요청했을 때
router.get("/logout",(req,res)=>{
    res.render("logout")
})



module.exports = router;