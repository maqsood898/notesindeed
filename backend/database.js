import mysql from "mysql"

export const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "notesindeed",
})

db.connect((err) => {

    if (err) {

        console.error("Database connection failed:", err.message);

    } else {

        console.log("Connected to MySQL database!");

    }
});