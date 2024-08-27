import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField, resetForm } from "./features/basicInfoSlice";
import './basicInfoForm.css';

function basicInfoForm(){
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.basicInfo);

    const handleChange = (e) => {
        dispatch(updateField({field: e.target.name, value: e.target.value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted',formData);
        dispatch(resetForm());
    };

    return(
        <div className="basic-info-form-container">
            <h2>BASIC INFORMATION</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group_binfo">
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        value={formData.fullname}
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
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default basicInfoForm;