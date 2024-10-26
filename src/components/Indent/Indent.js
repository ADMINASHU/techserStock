import React, { useEffect, useState, useCallback } from "react";
import IndentRequestForm from "./IndentRequestForm";
import IndentTable from "./IndentTable";

const Indent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [indentData, setIndentData] = useState([]);
  const [storeData, setStoreData] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const rData = JSON.parse(localStorage.getItem("indentData")) || [];
    setIndentData(rData);
    const pData = JSON.parse(localStorage.getItem("productData")) || [];
    setProductData(pData);
    const sData = JSON.parse(localStorage.getItem("storeData")) || [];
    setStoreData(sData);
    const iData = JSON.parse(localStorage.getItem("itemData")) || [];
    const itemList = iData.map((item) => item.name);
    console.log("itemList", itemList);
    setItemList(itemList);
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
    "indent No",
    "Indent Date",
    "Indent By",
    "Spare List",
    "Customer Details",
    "Product Details",
  ];
  return (
    <div style={{ padding: "20px" }}>
      {isFormOpen && (
        <IndentRequestForm
          iList={itemList} 
          pData={productData}
          sData={storeData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      <IndentTable rData={indentData} sData={storeData} headers={headers} onAdd={handleAdd} />
    </div>
  );
};

export default Indent;
