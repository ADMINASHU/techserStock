import React, { useEffect, useState, useCallback } from "react";
import IndentRequestForm from "./IndentRequestForm";
import IndentTable from "./IndentTable";

const Indent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [indentData, setIndentData] = useState([]);
  const [storeData, setStoreData] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const iData = JSON.parse(localStorage.getItem("indentData")) || [];
    setIndentData(iData);
    const pData = JSON.parse(localStorage.getItem("productData")) || [];
    setProductData(pData);
    const sData = JSON.parse(localStorage.getItem("storeData")) || [];
    setStoreData(sData);
  }, []);

  const handleAdd = () => {
    setIsFormOpen(true);
  };

  const handleSave = useCallback(
    (newData) => {
      const updatedData = [...indentData, newData];
      localStorage.setItem("indentData", JSON.stringify(updatedData));
      setIndentData(updatedData); // Update state to re-render table
      alert("Form submitted successfully!");
      setIsFormOpen(false);
    },
    [indentData]
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
      {isFormOpen && <IndentRequestForm pData={productData} sData={storeData} onSave={handleSave} onCancel={handleCancel} />}
      <IndentTable iData={indentData} sData={storeData} headers={headers} onAdd={handleAdd} />
    </div>
  );
};

export default Indent;
