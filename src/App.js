import './index.css';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4ainer">
        <div className="columns-1"></div>
        <div className="columns-4"></div>
        <Routes>
          <Route exact path="/" element={<ProductList />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/add" element={<AddProduct />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/edit/:id" element={<EditProduct />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
