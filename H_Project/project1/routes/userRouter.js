const express = require("express");
const router = express.Router();
const conn = require("../config/db")

// 1. 로그인로직 
router.post("/join",(req,res)=>{
    let {id,pw,nick} = req.body;
    let sql = "insert into member values (?,?,?)"
    conn.query(spl,[id,pw,nick],(err,rows)=>{
        console.log("DB insert:",row);
        if(rows){
            res.redirect("/")
        }else{
            res.send("alert('회원가입실패')")
        }
    })
})

// 2. 로그인 로직
router.post("/login",(req,res)=>{
    let {id,pw} = req.body;
    let sql = "select * from member where id = ? and pw = ?"
    conn.query(sql,[id,pw],(err,rows)=>{
        if(rows.length > 0){
            console.log("로그인성공");
            req.session.nick = row[0].nick
            res.redirect("/")
        }else{
            console.log("로그인 실패");
        }
    })
})

// 3.회원수정 로직
