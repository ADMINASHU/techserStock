import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Store from './components/Store/Store.js';
import Indent from './components/Indent/Indent.js';
import Item from './components/Item/Item.js';
import ItemCategory from './components/Item Category/ItemCategory.js';

function App() {
  return (
    <div>
      
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indent" element={ <Indent/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/itemCategory" element={<ItemCategory/>} />
        <Route path="/itemList" element={<Item/>} />
      </Routes>
    </Router>
  
    </div>

  );
}

export default App;
