import React from "react";

const ItemTable = ({ data, headers, onAdd }) => {
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
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td style={tdStyle}>{rowIndex+1}</td>
              <td style={tdStyle}>{row.itemCode}</td>
              <td style={tdStyle}>{row.itemDescription}</td>
              <td style={tdStyle}>{row.category}</td>
              <td style={tdStyle}>{row.name}</td>
              <td style={tdStyle}>{row.details}</td>
              <td style={tdStyle}>{row.rating}</td>
              <td style={tdStyle}>{row.dcVolt}</td>
              <td style={tdStyle}>{row.phase}</td>
              <td style={tdStyle}>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
