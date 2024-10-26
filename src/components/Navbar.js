import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ul: {
    listStyleType: "none",
    display: "flex",
    gap: "10px",
    margin: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    padding: "10px 20px",
    backgroundColor: "rgb(231, 111, 81)",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  linkHover: {
    backgroundColor: "rgb(200, 90, 60)",
  },
  logo: {
    marginLeft: "20px",
  },
  dropdown: {
    position: "relative",
    display: "inline-block",
  },
  dropdownContent: {
    display: "none",
    position: "absolute",
    marginTop: "10px",
    backgroundColor: "#333",
    width: "200px",
    borderRadius: "5px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
  },
  showDropdownContent: {
    display: "block",
  },
  dropdownLink: {
    color: "#fff",
    textDecoration: "none",
    display: "block",
    padding: "10px 20px",
    backgroundColor: "rgb(231, 111, 81)",
    transition: "background-color 0.3s",
  },
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        <img src={logo} alt="Logo" style={{ width: "100px", height: "50px" }} />
      </Link>
      <ul style={styles.ul}>
        <li>
          <Link
            to="/"
            style={styles.link}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = styles.link.backgroundColor)
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/stock"
            style={styles.link}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = styles.link.backgroundColor)
            }
          >
            Stock
          </Link>
        </li>
        <li>
          <Link
            to="/transfer"
            style={styles.link}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = styles.link.backgroundColor)
            }
          >
            Transfer
          </Link>
        </li>
        <li style={styles.dropdown} onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
          <Link to="#" style={styles.link}>
            Item
          </Link>
          <div
            style={{
              ...styles.dropdownContent,
              ...(dropdownOpen ? styles.showDropdownContent : {}),
            }}
          >
            <Link to="/itemCategory" style={styles.dropdownLink}>
              Item Category
            </Link>
            <Link to="/itemList" style={styles.dropdownLink}>
              Item List
            </Link>
            <Link to="/sparePart" style={styles.dropdownLink}>
              Spare Part
            </Link>
            <Link to="/spareBoard" style={styles.dropdownLink}>
              Spare Board
            </Link>
          </div>
        </li>
        <li>
          <Link
            to="/store"
            style={styles.link}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = styles.link.backgroundColor)
            }
          >
            Store
          </Link>
        </li>
        <li>
          <Link
            to="/indent"
            style={styles.link}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = styles.link.backgroundColor)
            }
          >
            Indent
          </Link>
        </li>
     
      </ul>
      <Link
        to="/login"
        style={styles.link}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor)
        }
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.link.backgroundColor)}
      >
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
