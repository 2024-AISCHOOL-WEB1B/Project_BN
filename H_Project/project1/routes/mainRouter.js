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
router.get("/join", (req,res)=>{
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
router.get("delet_user", (req,res)=>{
    res.render("delet_user")
})

module.exports = router;