import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndentRequestForm from "./components/IndentRequestForm.js";
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Store from './components/Store/Store.js';

function App() {
  return (
    <div>
      
    <Router>
     <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indent" element={ <IndentRequestForm />} />
        <Route path="/store" element={<Store/>} />
      </Routes>
    </Router>
  
    </div>

  );
}

export default App;
