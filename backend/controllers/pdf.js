import { db } from "../database.js";
import jwt from "jsonwebtoken"

export const getPdfs = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM pdfs WHERE cat=?" : "SELECT * FROM pdfs";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};

export const getPdf = (req, res) => {
    const q = "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `cls`, `date` FROM users u JOIN pdfs p ON u.id=p.uid WHERE p.id = ?"

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
};

export const addPdf = (req, res) => {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Not Authenticated!")

    jwt.verify(token,"jwtkey", (err, userInfo) =>{
        if(err) return res.status(403).json("Token in not valid!")

        const q = "INSERT INTO pdfs(`title`, `desc`, `img`, `cat`, `cls`, `date`, `uid`) VALUES (?)"

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
            req.body.cls,
            req.body.date,
            userInfo.id
        ]

        db.query(q, [values], (err,data) => {
        if (err) return res.status(500).json(err);

        return res.json("Post has been Created!")
        })
    })
}

export const deletePdf = (req, res) => {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Not Authenticated!")

    jwt.verify(token,"jwtkey", (err, userInfo) =>{
        if(err) return res.status(403).json("Token in not valid!")

        const postId = req.params.id
        const q = "DELETE FROM pdfs WHERE `id` = ? AND `uid` = ?"

        db.query(q,[postId, userInfo.id], (err, data)=>{
            if(err) return res.status(403).json("You can delete your post!")

            return res.json("Post has been deleted!")
        });
    });
};

export const updatePdf = (req, res) => {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Not Authenticated!")

    jwt.verify(token,"jwtkey", (err, userInfo) =>{
        if(err) return res.status(403).json("Token in not valid!")

        const q = "UPDATE pdfs SET `title`=?, `desc`=?, `img`=?, `cat`=?, `cls`=? WHERE `id` = ? AND `uid`=?";

        const postId = req.params.id

        const values = [
            res.body.title,
            res.body.desc,
            res.body.img,
            res.body.cat,
            res.body.cls,
        ]

        db.query(q, [...values, postId, userInfo.id], (err,data) => {
        if (err) return res.status(500).json(err);

        return res.json("Post has been Updated!")
        })
    })
}