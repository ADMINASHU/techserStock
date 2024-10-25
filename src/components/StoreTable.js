import React, { useEffect, useState } from 'react';

const StoreTable = ({ onAdd }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('storeData')) || [];
    setData(Array.isArray(storedData) ? storedData : []);
  }, []);

  return (
    <div>
      <button onClick={onAdd} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}>+ Add Entry</button>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {['S No', 'Store Code', 'Store Type', 'Store Name', 'Store Address', 'City', 'State', 'Zip Code', 'Store Contact', 'Store Email', 'GST', 'Region'].map((header, index) => (
              <th key={index} style={{ border: '1px solid #ddd', padding: '8px' }}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.sNo}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.storeCode}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.storeType}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.storeName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.storeAddress}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.city}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.state}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.zipCode}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.storeContact}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.storeEmail}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.gst}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default StoreTable;
