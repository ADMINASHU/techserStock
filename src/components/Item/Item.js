import React, { useEffect, useState, useCallback } from "react";
import AddItemForm from "./AddItemFrom";
import ItemTable from "./ItemTable";

const Item = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const itemData = JSON.parse(localStorage.getItem("itemData")) || [];
    setData(itemData);
  }, []);

  const handleAdd = () => {
    setIsFormOpen(true);
  };

  const handleSave = useCallback(
    (newData) => {
      const updatedData = [...data, newData];
      localStorage.setItem("itemData", JSON.stringify(updatedData));
      setData(updatedData); // Update state to re-render table
      alert("Form submitted successfully!");
      setIsFormOpen(false);
    },
    [data]
  );

  const handleCancel = () => {
    setIsFormOpen(false);
  };
  const headers = [
    "SNo",
    "Item Code",
    "Item Description",
    "Category",
    "Name",
    "Details",
    "Rating",
    "DC Volt",
    "Phase",
    "Price"
  ];
  return (
    
    <div style={{ padding: "20px" }}>
      {isFormOpen && <AddItemForm onSave={handleSave} onCancel={handleCancel} />}
      <ItemTable data={data} headers={headers} onAdd={handleAdd} />
    </div>
  );
};

export default Item;
