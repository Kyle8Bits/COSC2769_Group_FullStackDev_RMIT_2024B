import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, resetStatus } from "../redux/slice/registerSlice";
import {useNavigate} from 'react-router-dom';
import '../css/basicInfoForm.css'

function BasicInfo(){
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    useEffect(() => {
        // Reset status when the component mounts
        dispatch(resetStatus());
    }, [dispatch]);

    const { status, error } = useSelector((state) => state.register);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        fullName: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };


    useEffect(() => {
        if (status === 'succeeded') {
            const timer = setTimeout(() => {
                navigate('/');
            }, 2000);

            // Cleanup the timeout if the component unmounts
            return () => clearTimeout(timer);
        }
    }, [status, navigate]);

    return(
        <div className="basic_info_page">
            <div className="basic-info-form-container">
            <h2>REGISTER</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group_binfo">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group_binfo">
                <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group_binfo">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group_binfo">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group_binfo">
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">SUBMIT</button>
            </form>

            {status === 'loading' && <p>Registering...</p>}
            {status === 'succeeded' && <p>Registration successful! Redirecting...</p>}
            {status === 'failed' && <p>Error: {error}</p>}

        </div>
        </div>
        
    );
};

export default BasicInfo;