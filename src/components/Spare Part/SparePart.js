import React, { useEffect, useState, useCallback } from "react";
import AddSparePartForm from "./AddSparePartFrom";
import SparePartTable from "./SparePartTable";


const SparePart = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const sparePartData = JSON.parse(localStorage.getItem("sparePartData")) || [];
    setData(sparePartData);
  }, []);

  const handleAdd = () => {
    setIsFormOpen(true);
  };

  const handleSave = useCallback(
    (newData) => {
      const updatedData = [...data, newData];
      localStorage.setItem("sparePartData", JSON.stringify(updatedData));
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
    "Part No",
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
      {isFormOpen && <AddSparePartForm onSave={handleSave} onCancel={handleCancel} />}
      <SparePartTable data={data} headers={headers} onAdd={handleAdd} />
    </div>
  );
};

export default SparePart;
