import React, { useEffect, useState, useCallback } from "react";
import StoreForm from "./StoreForm";
import StoreTable from "./StoreTable";

const Store = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("storeData")) || [];
    setData(storedData);
  }, []);

  const handleAdd = () => {
    setIsFormOpen(true);
  };

  const handleSave = useCallback(
    (newData) => {
      const updatedData = [...data, newData];
      localStorage.setItem("storeData", JSON.stringify(updatedData));
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
    "S No",
    "Store Code",
    "Store Type",
    "Store Name",
    "Store Address",
    "City",
    "State",
    "Zip Code",
    "Store Contact",
    "Store Email",
    "GST",
    "Region",
  ];
  return (
    <div style={{ padding: "20px" }}>
      {isFormOpen && <StoreForm onSave={handleSave} onCancel={handleCancel} />}
      <StoreTable data={data} headers={headers} onAdd={handleAdd} />
    </div>
  );
};

export default Store;
