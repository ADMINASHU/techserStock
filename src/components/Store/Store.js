import React, { useState } from 'react';
import StoreForm from '../StoreForm';
import StoreTable from '../StoreTable';

const Store = () => {
  const [data, setData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAdd = () => {
    setIsFormOpen(true);
  };

  const handleSave = (newData) => {
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem('storeData', JSON.stringify(updatedData));
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      {isFormOpen && <StoreForm onSave={handleSave} onCancel={handleCancel} />}
      <StoreTable onAdd={handleAdd} />
    </div>
   );
};




export default Store;
