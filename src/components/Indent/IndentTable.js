import React from "react";

const IndentTable = ({ iData, sData, headers, onAdd }) => {
  const tdStyle = { border: "1px solid #ddd", padding: "8px" };
  return (
    <div>
      <button
        onClick={onAdd}
        style={{
          marginBottom: "10px",
          padding: "10px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        + Add Entry
      </button>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} style={tdStyle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {iData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td style={tdStyle}>{row.sNo}</td>
              <td style={tdStyle}>{row.storeCode}</td>
              <td style={tdStyle}>{row.storeType}</td>
              <td style={tdStyle}>{row.storeName}</td>
              <td style={tdStyle}>{row.storeAddress}</td>
              <td style={tdStyle}>{row.city}</td>
              <td style={tdStyle}>{row.state}</td>
              <td style={tdStyle}>{row.zipCode}</td>
              <td style={tdStyle}>{row.storeContact}</td>
              <td style={tdStyle}>{row.storeEmail}</td>
              <td style={tdStyle}>{row.gst}</td>
              <td style={tdStyle}>{row.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndentTable;
