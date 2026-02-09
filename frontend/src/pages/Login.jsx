import React, { useState } from "react";
import '../styles/login.css';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/");
        }
        catch (err) {
            setError(err.response.data);
        }
    }

    return (
        <>
            <div className="login-page">
                <div className="login_panel">
                    <form>
                        <h1> Login </h1>
                        <div className="input-box">
                            
                            <svg className="svg_icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path
                                    d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z" />
                            </svg>
			    <input type="text" placeholder="Username" name="username" onChange={handleChange} required />
                        </div>
                        <div className="input-box">
                            
                            <svg className="svg_icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path
                                    d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                            </svg>
			<input type="password" placeholder="Password" name="password" onChange={handleChange} required />
                        </div>
                        <div className="remember-forget">
                            <label><input type="checkbox" /> Remember me</label>
                            <Link to="#">Forgot password?</Link>
                        </div>

                        <button type="submit" className="btn" onClick={handleSubmit}>Login</button>

                        {err && <p>{err}</p>}

                        <div className="register-link">
                            <p>Don't have an account? <Link to="/signup">Register</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;