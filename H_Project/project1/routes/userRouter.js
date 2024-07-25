const express = require("express");
const router = express.Router();
const conn = require("../config/db")

router.post("/join",(req,res)=>{
    console.log(req.body);
    let {id,pw,nick} = req.body;
    let sql = "insert into member values (?,?,?)"
    conn.query(spl.[id,pw,nick],(err,rows)=>{
        console.log("DB insert:",row);
        if(rows){
            res.redirect("/")
        }else{
            res.send("")
        }
    })
})