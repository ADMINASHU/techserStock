import React, { useState } from "react";
import { LabelColor, SubmitButtonColor,inputBorder  } from "../const";


const AddItemForm = ({ onSave, onCancel }) => {
  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const formStyle = {
    maxWidth: "700px",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "800px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: LabelColor,
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: inputBorder,
    borderRadius: "4px",
    backgroundColor: "white",
  };

  const sectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };
  const sectionSideStyle = {
    display: "flex",
    width: "95%",
    gap: "40px",
    margin: "auto",
  };

  const fieldContainerStyle = {
    flex: "1 1 calc(50% - 20px)", // Adjust to fit two fields per row
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: SubmitButtonColor,
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "auto",
    marginTop: "20px",
  };

  const initialFormData = {
    itemCode: "",
    itemDescription: "",
    category: "",
    name: "",
    details: "",
    rating: "",
    dcVolt: "",
    phase: "",
    price: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div style={modalOverlayStyle} onClick={onCancel}>
      <div style={{ ...formStyle, marginTop: "200px", marginBottom: "200px" }}>
        <h2>Add Item Form</h2>
        <form onSubmit={handleSubmit}>
          <div style={sectionSideStyle}>
            <div style={fieldContainerStyle}>
              <label style={labelStyle}>Item Code:</label>
              <input
                type="text"
                name="itemCode"
                required
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter Item Code"
              />
            </div>
            <div style={fieldContainerStyle}>
              <label style={labelStyle}>Item Description:</label>
              <input
                type="text"
                name="itemDescription"
                required
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter Item Description"
              />
            </div>
          </div>
          <div style={sectionSideStyle}>
            <div style={fieldContainerStyle}>
              <label style={labelStyle}>Category:</label>
              <select name="category" required onChange={handleChange} style={inputStyle}>
                <option value="">Select Category</option>
                <option value="UPS">UPS</option>
                <option value="BATTERY">BATTERY</option>
                <option value="SPARE">SPARE</option>
                <option value="OTHERS">OTHERS</option>
              </select>
            </div>
            <div style={fieldContainerStyle}>
              <label style={labelStyle}>Name:</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter Name"
              />
            </div>
          </div>
          <div style={sectionSideStyle}>
            <div style={fieldContainerStyle}>
              <label style={labelStyle}>Details:</label>
              <textarea
                name="details"
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter Details"
              />
            </div>
          </div>
          <div style={sectionSideStyle}>
            <div style={fieldContainerStyle}>
              <label style={labelStyle}>Rating:</label>
              <input
                type="text"
                name="rating"
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter Rating"
              />
            </div>

            <div style={fieldContainerStyle}>
              <label style={labelStyle}>DC Volt:</label>
              <input
                type="text"
                name="dcVolt"
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter DC Volt"
              />
            </div>
          </div>
          <div style={sectionSideStyle}>
            <div style={fieldContainerStyle}>
              <label style={labelStyle}>Phase:</label>
              <input
                type="text"
                name="phase"
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter Phase"
              />
            </div>

            <div style={fieldContainerStyle}>
              <label style={labelStyle}>Price:</label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter Price"
              />
            </div>
          </div>
          <div style={buttonContainerStyle}>
            <button type="button" style={{ ...buttonStyle, marginLeft: "20px" }} onClick={onCancel}>
              Close
            </button>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;
