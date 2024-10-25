import React, { useState, useEffect } from 'react';
const Label = '#ff6f61';
const SubmitButton = '#e76f51';
const DeleteButton = '#d62828';

const IndentRequestForm = () => {

  const formStyle = {
    maxWidth: '1400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #f4a261',
    borderRadius: '8px',
    backgroundColor: 'white',

  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const sectionSideStyle = {
    display: 'flex',
    width: '95%',
    gap: '40px',
    margin: 'auto',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: Label,
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: Label,
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #f4a261',
    borderRadius: '4px',
    backgroundColor: 'white',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: SubmitButton,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const addButtonStyle = {
    padding: '10px',
    backgroundColor: SubmitButton,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const removeButtonStyle = {
    padding: '8px 10px',
    marginBottom: '10px',
    backgroundColor: DeleteButton,
    color: 'white',
    border: '1px solid #d62828',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: 'auto',
    marginTop: '20px',
  };


  const demoData = [
    {
      serialNo: 'P12345',
      productDetails: {
        category: 'Online',
        dcVolt: '36V',
        configuration: 'UNI',
        rating: '2 KVA',
        phase: 'Single',
        noOfSet: '1',
        system: 'UPS',
        model: 'TPE',
        warrStatus: 'Warranty',
      },
      customerDetails: {
        customerCode: 'KAL/PAT/24/12345',
        name: 'BOB Bank',
        address: 'BOB Bank, near bypass Road, Ramakrishana Nagar, Dhelwan, Patna - 800020',
        city: 'Patna',
        state: 'BIHAR',
        zipCode: '800020',
        mob: '123-456-7890',
        email: 'test@example.com',
      }
    },
    {
      serialNo: 'P12346',
      productDetails: {
        category: 'Online',
        dcVolt: '192V',
        configuration: 'UNI',
        rating: '5 KVA',
        phase: 'Single',
        noOfSet: '1',
        system: 'UPS',
        model: 'TECHGLARE',
        warrStatus: 'Warranty',
      },
      customerDetails: {
        customerCode: 'KAL/PAT/24/12346',
        name: 'HDFC Bank',
        address: 'HDFC Bank, near bypass Road, Ramakrishana Nagar, Dhelwan, Patna - 800020',
        city: 'Patna',
        state: 'BIHAR',
        zipCode: '800020',
        mob: '123-456-7890',
        email: 'test@example.com',
      }
    },
    {
      serialNo: 'P12347',
      productDetails: {
        category: 'Online',
        dcVolt: '36V',
        configuration: 'UNI',
        rating: '3 KVA',
        phase: 'Single',
        noOfSet: '1',
        system: 'UPS',
        model: 'TPS',
        warrStatus: 'Warranty',
      },
      customerDetails: {
        customerCode: 'KAL/PAT/24/12347',
        name: 'SBI Bank',
        address: 'SBI Bank, near bypass Road, Ramakrishana Nagar, Dhelwan, Patna - 800020',
        city: 'Patna',
        state: 'BIHAR',
        zipCode: '800020',
        mob: '123-456-7890',
        email: 'test@example.com',
      }
    },
    {
      serialNo: 'P12348',
      productDetails: {
        category: 'Online',
        dcVolt: '72V',
        configuration: 'UNI',
        rating: '3 KVA',
        phase: 'Single',
        noOfSet: '1',
        system: 'UPS',
        model: 'TPE',
        warrStatus: 'Warranty',
      },
      customerDetails: {
        customerCode: 'KAL/PAT/24/12348',
        name: 'AXIS Bank',
        address: 'AXIS Bank, near bypass Road, Ramakrishana Nagar, Dhelwan, Patna - 800020',
        city: 'Patna',
        state: 'BIHAR',
        zipCode: '800020',
        mob: '123-456-7890',
        email: 'test@example.com',
      }
    },
    // Add more demo objects as needed
  ];


  const demoSpareNames = ['Spare Part A', 'Spare Part B', 'Spare Part C', 'Spare Part D'];






  const [spareNameSuggestions, setSpareNameSuggestions] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [indent, setIndent] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [productDetails, setProductDetails] = useState({});
  const [customerDetails, setCustomerDetails] = useState({});
  const [indentDate, setIndentDate] = useState(currentDateTime);
  const [spareParts, setSpareParts] = useState([{ spareName: '', qty: '' }]);
  const [activeIndex, setActiveIndex] = useState(null);


  useEffect(() => {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    setCurrentDateTime(formattedDateTime);
  }, []);



  const handleSparePartChange = (index, event) => {
    const values = [...spareParts];
    values[index][event.target.name] = event.target.value;

    // Filter suggestions based on input
    if (event.target.name === 'spareName') {
      const filteredSuggestions = demoSpareNames.filter(spare =>
        spare.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSpareNameSuggestions(filteredSuggestions);
    }

    setSpareParts(values);
  };

  const handleAddSparePart = () => {
    setSpareParts([...spareParts, { spareName: '', qty: '' }]);
  };

  const handleRemoveSparePart = (index) => {
    const values = [...spareParts];
    values.splice(index, 1);
    setSpareParts(values);
  };
  const handleFocus = (index) => {
    setActiveIndex(index);
  };
  const handleSerialNoChange = (e) => {
    const serial = e.target.value;
    setSerialNo(serial);

    const selectedData = demoData.find(data => data.serialNo === serial);
    if (selectedData) {
      setProductDetails(selectedData.productDetails);
      setCustomerDetails(selectedData.customerDetails);
    } else {
      setProductDetails({
        category: '',
        dcVolt: '',
        configuration: '',
        rating: '',
        phase: '',
        noOfSet: '',
        system: '',
        model: '',
        warrStatus: ''
      });
      setCustomerDetails({
        customerCode: '',
        name: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        mob: '',
        email: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem('indentData', JSON.stringify(formData));
    alert('Form submitted successfully!');
    setIsSubmitted(true); // Hide the form after submission
  };
  if (isSubmitted) {
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '900px',
      fontSize: '30px',
      color: '#ff6f61'
    }}>Form submitted successfully! this is previous page</div>;
  }
  return (
    <div style={formStyle}>
      <h2>Add Indent/Request Form</h2>
      <form onSubmit={handleSubmit} >
        <div style={sectionSideStyle}>
          <div style={{ width: '55%' }}>
            <h3>Indent Information</h3>
            <div style={sectionSideStyle}>
              <div style={{ width: '50%' }}>
                <label style={labelStyle}>Indent for:</label>
                <select value={indent} onChange={(e) => setIndent(e.target.value)} style={inputStyle}>
                  <option value="">Select</option>
                  <option value="USP">USP</option>
                  <option value="Battery">Battery</option>
                  <option value="Spare">Spare</option>
                  <option value="Others">Others</option>
                </select>
                <label style={labelStyle}>Store Type:</label>
                <input type="text" placeholder="Enter Store Type" value="Branch Store" style={inputStyle} />
              </div>
              <div style={{ width: '50%' }}>
                <label style={labelStyle}>Indent Date:</label>
                <input type="date" value={indentDate} onChange={(e) => setIndentDate(e.target.value)} style={inputStyle} />
                <label style={labelStyle}>Store Name:</label>
                <input type="text" placeholder="Enter Store Name" value="Bangalore Branch Store" style={inputStyle} />
              </div>
              <div style={{ width: '50%' }}>
                <label style={labelStyle}>Indent No:</label>
                <input type="text" placeholder="Enter Indent No" style={inputStyle} />
              </div>
            </div>
            <div style={sectionSideStyle}>
              <div style={{ width: '100%' }}>
                <label style={labelStyle}>Address:</label>
                <textarea type="text" placeholder="Enter Address" value="Techser Power Solutions Pvt Ltd
No, 42, Ramchandrapura, Jalahalli, Bangalore-560013 " style={inputStyle} />
              </div>
            </div>
            <div style={sectionStyle}>
              <h3>Product Details</h3>
              <div style={sectionSideStyle}>
                <div style={{ width: '30%' }}>
                  <label style={labelStyle}>Serial No:</label>
                  <input
                    type="text"
                    placeholder="Serial Number"
                    style={inputStyle}
                    value={serialNo}
                    onChange={handleSerialNoChange}
                  />

                </div>
              </div>
              <div style={sectionSideStyle}>
                <div style={{ width: '100%' }}>
                  <label style={labelStyle}>Category:</label>
                  <input type="text" placeholder="Enter Category" value={productDetails.category} style={inputStyle} />
                  <label style={labelStyle}>DC Volt:</label>
                  <input type="text" placeholder="Enter DC Volt" value={productDetails.dcVolt} style={inputStyle} />
                  <label style={labelStyle}>Configuration:</label>
                  <input type="text" placeholder="Enter Configuration" value={productDetails.configuration} style={inputStyle} />
                </div>
                <div style={{ width: '100%' }}>
                  <label style={labelStyle}>Rating:</label>
                  <input type="text" placeholder="Enter Rating" value={productDetails.rating} style={inputStyle} />
                  <label style={labelStyle}>Phase:</label>
                  <input type="text" placeholder="Enter Phase" value={productDetails.phase} style={inputStyle} />
                  <label style={labelStyle}>No of Set:</label>
                  <input type="text" placeholder="Enter No of Set" value={productDetails.noOfSet} style={inputStyle} />
                </div>
                <div style={{ width: '100%' }}>
                  <label style={labelStyle}>System:</label>
                  <input type="text" placeholder="Enter System" value={productDetails.system} style={inputStyle} />
                  <label style={labelStyle}>Model:</label>
                  <input type="text" placeholder="Enter Model" value={productDetails.model} style={inputStyle} />
                  <label style={labelStyle}>Warr Status:</label>
                  <input type="text" placeholder="Enter Warr Status" value={productDetails.warrStatus} style={inputStyle} />
                </div>
              </div>
            </div>
            <div style={sectionStyle}>
              <h3>Customer Details</h3>
              <div style={sectionSideStyle}>
                <div style={{ width: '50%' }}>
                  <label style={labelStyle}>Customer Code:</label>
                  <input type="text" placeholder="Enter Customer Code" value={customerDetails.customerCode} style={inputStyle} />
                </div>
                <div style={{ width: '50%' }}>
                  <label style={labelStyle}>Name:</label>
                  <input type="text" placeholder="Enter Name" value={customerDetails.name} style={inputStyle} />
                </div>
              </div>
              <div style={sectionSideStyle}>
                <div style={{ width: '100%' }}>
                  <label style={labelStyle}>Address:</label>
                  <textarea type="text" placeholder="Enter Address" value={customerDetails.address} style={inputStyle} />
                </div>
              </div>
              <div style={sectionSideStyle}>
                <div style={{ width: '100%' }}>
                  <label style={labelStyle}>City:</label>
                  <input type="text" placeholder="Enter City" value={customerDetails.city} style={inputStyle} />
                </div>
                <div style={{ width: '100%' }}>
                  <label style={labelStyle}>State:</label>
                  <input type="text" placeholder="Enter State" value={customerDetails.state} style={inputStyle} />
                </div>
                <div style={{ width: '100%' }}>
                  <label style={labelStyle}>Zip Code:</label>
                  <input type="text" placeholder="Enter Zip Code" value={customerDetails.zipCode} style={inputStyle} />
                </div>
              </div>
              <div style={sectionSideStyle}>
                <div style={{ width: '50%' }}>
                  <label style={labelStyle}>Mob:</label>
                  <input type="text" placeholder="Enter Mobile Number" value={customerDetails.mob} style={inputStyle} />
                </div>
                <div style={{ width: '50%' }}>
                  <label style={labelStyle}>Email:</label>
                  <input type="text" placeholder="Enter Email" value={customerDetails.email} style={inputStyle} />
                </div>
              </div>

            </div>
          </div>

          <div style={{ width: '45%' }}>
            <div style={{ ...sectionStyle }}>

              <h3>User Time Stamp</h3>
              <div style={sectionSideStyle}>
                <div style={{ width: '100%' }}>
                  <label style={labelStyle}>Created By:</label>
                  <input type="text" placeholder="Enter Creator Name" value='Admin' style={inputStyle} />
                  <label style={labelStyle}>Reviewed by:</label>
                  <input type="text" placeholder="Enter Reviewer Name" style={inputStyle} />
                  <label style={labelStyle}>Approved by:</label>
                  <input type="text" placeholder="Enter Approver Name" style={inputStyle} />

                </div>
                <div style={{ width: '100%' }}>
                  <label style={labelStyle}>Created DateTime:</label>
                  <input type="text" placeholder="Enter Creation DateTime" value={currentDateTime} readOnly style={inputStyle} />
                  <label style={labelStyle}>Reviewed DateTime:</label>
                  <input type="text" placeholder="Enter Review DateTime" style={inputStyle} />
                  <label style={labelStyle}>Approved DateTime:</label>
                  <input type="text" placeholder="Enter Approval DateTime" style={inputStyle} />
                </div>
              </div>

            </div>
            <div style={{ ...sectionStyle }}>
              <h3>Spare Part Details</h3>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ ...headerStyle, width: '60px' }}>S No</label>
                <label style={{ ...headerStyle, width: '100%' }}>Spare Name</label>
                <label style={{ ...headerStyle, width: '120px' }}>Qty</label>
                <label style={{ ...headerStyle, width: '50px' }}>&nbsp;&nbsp;&nbsp;&nbsp;</label>
              </div>
              {spareParts.map((sparePart, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <input type="text" style={{ ...inputStyle, width: '20px' }} value={index + 1} readOnly />
                  <div style={{ width: '100%' }}>
                    <input
                      type="text"
                      name="spareName"
                      value={sparePart.spareName}
                      onChange={event => handleSparePartChange(index, event)}
                      onFocus={() => handleFocus(index)}
                      style={{ ...inputStyle, width: '96%' }}
                      placeholder="Enter Spare Name"
                    />
                    {spareNameSuggestions.length > 0 && activeIndex === index && (
                      <ul style={{ position: 'absolute', backgroundColor: 'white', border: '1px solid #ccc', zIndex: 1, listStyle: 'none', marginTop: '0', padding: '0' }}>
                        {spareNameSuggestions.map((suggestion, i) => (
                          <li key={i} style={{ padding: '5px', cursor: 'pointer' }} onClick={() => {
                            const values = [...spareParts];
                            values[index].spareName = suggestion;
                            setSpareParts(values);
                            setSpareNameSuggestions([]);
                          }}>
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <input
                    type="number"
                    name="qty"
                    value={sparePart.qty}
                    onChange={event => handleSparePartChange(index, event)}
                    style={{ ...inputStyle, width: '70px' }}
                    placeholder="Qty"
                  />
                  <button type="button" onClick={() => handleRemoveSparePart(index)} style={removeButtonStyle}>
                    X
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddSparePart} style={addButtonStyle}>
                Add Spare Part
              </button>
            </div>
          </div>
        </div>

        <div style={buttonContainerStyle}>
          <button type="button" style={{ ...buttonStyle, marginLeft: '40px' }} >Close</button>
          <button type="submit" style={{ ...buttonStyle, marginRight: '40px' }}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default IndentRequestForm;
