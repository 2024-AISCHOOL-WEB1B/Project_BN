// const express = require("express");
// const router = express.Router();
// const conn = require("../config/db")

// // 오너가 회원가입을 요청했을 때
// router.get("", (req,res)=>{
//     res.render("")
// })

// // 오너가 로그인을 요청했을 때
// router.get("", (req,res)=>{
//     res.render("")
// })

// // 오너가 로그아웃을 요청했을 때
// router.get("",(req,res)=>{
//     res.render("")
// })

// // 오너마이페이지 이동
// router.get("", (req,res)=>{
//     if(req.session.nick){
//         res.render("", { 
//             nick: req.session.nick,
//             email: req.session.email
//          });
//     } else {
//         res.render("")
//     } 
//     console.log("마이페이지 이동")
// })


// // 사용자가 정보수정을 요청했을 때
// router.get("", (req,res)=>{
//     if(req.session.nick){
//         res.render("", { 
//             nick: req.session.nick,
//             email: req.session.email
//          });
//     } else {
//         res.render("")
//     } 
//     console.log("정보수정페이지 이동")
// })

// // 사용자가 회원탈퇴를 요청했을 때
// router.get("", (req,res)=>{
//     res.render("")



// module.exports = router;