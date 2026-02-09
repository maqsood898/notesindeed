import React, { useState } from 'react';
import "../styles/write.css";
import axios from "axios";
import { useLocation } from 'react-router';
import moment from "moment";

const Write = () => {

    const state = useLocation().state
    const [title, setTitle] = useState(state?.title || "");
    const [desc, setDesc] = useState(state?.desc || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");
    const [cls, setCls] = useState(state?.cls || "");

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file)
            const res = await axios.post("/upload", formData)
            return res.data
        } catch (err) {
            console.log(err)
        }
    }

    console.log(state);

    const handleSubmit = async e => {
        e.preventDefault()
        const imgUrl = await upload();
        try {
            state
                ?
                await axios.put(`/pdfs/${state.id}`, {
                    title,
                    desc,
                    cat,
                    cls,
                    img: file ? imgUrl : "",
                })
                :
                await axios.post(`/pdfs/`, {
                    title,
                    desc,
                    cat,
                    cls,
                    img: file ? imgUrl : "",
                    date: moment(Date.now()).format("YYYY-DD-MM HH:mm:ss"),

                });
        } catch (err) {
            console.log(err.data)
        }
        console.log(imgUrl)
    };

    return (
        <>
            <div className="add sec">
                <h3 className="form-title">{state ? "Update Your Pdf" : "Add Your Own PDF"}</h3>
                <div className="add_form">
                    <input className='add-form-inputs inp-file' type="file" name="" id="file" onChange={e => setFile(e.target.files[0])} />
                    <div className="upload-details">
                        <input className='shadow add-form-inputs' value={title} type="text" placeholder='Pdf title' onChange={e => setTitle(e.target.value)} />
                        <div className="upload-select">
                            <select
                                className="shadow add-form-inputs sel-sub"
                                value={cat}
                                onChange={(e) => setCat(e.target.value)}
                            >
                                <option value="">Select Subject/Category</option>
                                {[
                                    "English",
                                    "Maths",
                                    "History",
                                    "Geography",
                                    "Physic",
                                    "Chemistry",
                                    "Biology",
                                    "Computer",
                                    "Accountancy",
                                    "Economics",
                                    "BST",
                                    "Commerce",
                                    "Hindi",
                                    "Engineering",
                                    "Programming",
                                    "Political",
                                    "French",
                                    "Others",
                                ].map((subject) => (
                                    <option key={subject} value={subject}>
                                        {subject}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="shadow add-form-inputs sel-sub"
                                value={cls}
                                onChange={(e) => setCls(e.target.value)}
                            >
                                <option value="">Select Class</option>
                                {[
                                    "Class1",
                                    "Class2",
                                    "Class3",
                                    "Class4",
                                    "Class5",
                                    "Class6",
                                    "Class7",
                                    "Class8",
                                    "Class9",
                                    "Class10",
                                    "Class11",
                                    "Class12",
                                    "BSc",
                                    "BCom",
                                    "Arts",
                                    "BTech",
                                    "Others",
                                ].map((cls) => (
                                    <option key={cls} value={cls}>
                                        {cls}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <textarea className='shadow add-form-inputs' value={desc} name="desc" id="" cols="30" rows="10" placeholder='Pdf description' onChange={e => setDesc(e.target.value)}></textarea>
                        <button onClick={handleSubmit} className="btn">{state ? "Update" : "Publish"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Write;