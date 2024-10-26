import React, { useState } from "react";
import "./ItemCategory.css";

const ItemCategory = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [currentItem, setCurrentItem] = useState(null);
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
    width: "500px",
  };


 

  const handleAdd = () => {
    if (input.trim()) {
      if ( currentItem !== null) {
        const updatedItems = items.map((item, index) =>
          index === currentItem ? { ...item, category: input } : item
        );
        setItems(updatedItems);
        setCurrentItem(null);
      } else {
        setItems([...items, { sno: items.length + 1, category: input }]);
      }
      setInput("");
    }
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };


  return (
    <div style={modalOverlayStyle}>
      <div style={formStyle}>
        <h1>Category List</h1>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter category"
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>S No</th>
              <th>Category List</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="first-column">{index + 1}</td>
                <td className="second-column">{item.category}</td>
                <td className="third-column">
                  <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemCategory;
