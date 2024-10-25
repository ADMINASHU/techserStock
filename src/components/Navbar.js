// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ul: {
    listStyleType: 'none',
    display: 'flex',
    gap: '10px',
    margin: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: 'rgb(231, 111, 81)',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  linkHover: {
    backgroundColor: 'rgb(200, 90, 60)',
  },
  logo: {
    marginLeft: "20px",
  },

};

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
      <img src={logo} alt="Logo" style={{ width: '100px', height: '50px' }} />
      </Link>
      <ul style={styles.ul}>
        <li>
          <Link to="/" style={styles.link} onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.link.backgroundColor}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/store" style={styles.link} onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.link.backgroundColor}>
            Store
          </Link>
        </li>
        <li>
          <Link to="/indent" style={styles.link} onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.link.backgroundColor}>
            Indent
          </Link>
        </li>
      </ul>
      <Link to="/login" style={styles.link} onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.link.backgroundColor}>
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
