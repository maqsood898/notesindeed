import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import userImage from "../assets/img/icon/profile-logo.jpg";

function Pdf() {

    //Fetch pdf
    const [pdf, setPdf] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2];

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/pdfs/${postId}`);
                setPdf(res.data);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [postId]);


    const handleDelete = async () => {
        try {
            await axios.delete(`/pdfs/${postId}`);
            navigate("/");
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <>

            <div className="sec">
                <img src={`/data/img/${pdf.img}`} alt="" style={{ width: '100px', height: '100%' }} />
                <embed src="/data/pdfs/Assignment.pdf" type="" />
                <p>{pdf.title} </p>
                <p>{pdf.desc} </p>
                <div className="user">
                    {pdf.userImg ? (<img src={pdf.userImg} />) : (<img src={userImage} />)}
                    <h3>{pdf.username}</h3>
                    <h4>Posted {moment(pdf.date).fromNow()} </h4>
                </div>
                <p>{pdf.cat}</p>
                <p>{pdf.cls}</p>

                {currentUser.username === pdf.username && (
                    <div className="edit">
                        <Link to={`/edit?edit=2`} state={pdf}> edit</Link>
                        <Link onClick={handleDelete}><img src="" alt="" />Delete</Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default Pdf;