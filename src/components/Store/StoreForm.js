import React, { useState } from 'react';
const Label = '#ff6f61';
const SubmitButton = '#e76f51';


const StoreForm = ({ onSave, onCancel}) => {

    const modalOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    };

    const formStyle = {
        maxWidth: '700px',
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '500px',
    };

    const sectionSideStyle = {
        display: 'flex',
        width: '95%',
        gap: '40px',
        margin: 'auto',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
        color: Label,
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginBottom: '10px',
        border: '1px solid #f4a261',
        borderRadius: '4px',
        backgroundColor: 'white',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: SubmitButton,
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };
    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: 'auto',
        marginTop: '20px',
    };







    const [formData, setFormData] = useState({
        sNo: '',
        storeCode: '',
        storeType: '',
        storeName: '',
        userName: '',
        storeAddress: '',
        city: '',
        state: '',
        zipCode: '',
        storeContact: '',
        storeEmail: '',
        gst: '',
        region: ''
    });
 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div style={modalOverlayStyle}>
            <div style={{ ...formStyle, marginTop: '200px', marginBottom: '200px' }}>
                <h2>Add Store Form</h2>
                <form onSubmit={handleSubmit}>
                    <div style={sectionSideStyle}>
                        <div style={{ width: '50%' }}>
                            <label style={labelStyle}>Store Type:</label>
                            <select name="storeType" required onChange={handleChange} style={inputStyle} >
                                <option value="">Select Type</option>
                                <option value="Factory Store">Factory Store</option>
                                <option value="Service Center Store">Service Center Store</option>
                                <option value="Regional Office Store">Regional Office Store</option>
                                <option value="Branch Office Store">Branch Office Store</option>
                                <option value="Service Engineer Store">Service Engineer Store</option>
                                <option value="Testing Engineer Store">Testing Engineer Store</option>
                            </select>
                        </div>
                        <div style={{ width: '50%' }}>
                            <label style={labelStyle}>Store Name:</label>
                            <input type="text" name="storeName" required onChange={handleChange} style={inputStyle} placeholder="Enter Store Name" />
                        </div>
                    </div>
                    <div style={sectionSideStyle}>
                        <div style={{ width: '100%' }}>
                            <label style={labelStyle}>Store Address:</label>
                            <textarea type="text" name="storeAddress" required onChange={handleChange} style={inputStyle} placeholder="Enter Store Address" />
                        </div>
                    </div>
                    <div style={sectionSideStyle}>
                        <div style={{ width: '50%' }}>
                            <label style={labelStyle}>City:</label>
                            <input type="text" name="city" required onChange={handleChange} style={inputStyle} placeholder="Enter City" />
                        </div>
                        <div style={{ width: '50%' }}>
                            <label style={labelStyle}>State:</label>
                            <input type="text" name="state" required onChange={handleChange} style={inputStyle} placeholder="Enter State" />
                        </div>
                        <div style={{ width: '50%' }}>
                            <label style={labelStyle}>Zip Code:</label>
                            <input type="text" name="zipCode" required onChange={handleChange} style={inputStyle} placeholder="Enter Zip Code" />
                        </div>
                    </div>
                    <div style={sectionSideStyle}>
                        <div style={{ width: '50%' }}>
                            <label style={labelStyle}>Store Contact:</label>
                            <input type="text" name="storeContact" required onChange={handleChange} style={inputStyle} placeholder="Enter Store Contact" />
                            <label style={labelStyle}>Region:</label>
                            <select name="region" required onChange={handleChange} style={inputStyle} >
                                <option value="">Select Region</option>
                                <option value="KALKA">KALKA</option>
                                <option value="KARNATAKA">KARNATAKA</option>
                                <option value="TAMIL NADU">TAMIL NADU</option>
                                <option value="KERALA">KERALA</option>
                                <option value="MADHYA PRADESH">MADHYA PRADESH</option>
                                <option value="UTTAR PRADESH">UTTAR PRADESH</option>
                            </select>
                        </div>
                        <div style={{ width: '50%' }}>
                            <label style={labelStyle}>Store Email:</label>
                            <input type="text" name="storeEmail" required onChange={handleChange} style={inputStyle} placeholder="Enter Store Email" />
                            <label style={labelStyle}>GST:</label>
                            <input type="text" name="gst" required onChange={handleChange} style={inputStyle} placeholder="Enter GST" />
                        </div>
                    </div>



                    <div style={buttonContainerStyle}>
                        <button type="button" style={{ ...buttonStyle, marginLeft: '20px' }} onClick={onCancel}>Close</button>
                        <button type="submit" style={buttonStyle}>Submit</button>
                    </div>







                </form>
            </div>
        </div>
    );
};

export default StoreForm;
