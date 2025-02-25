import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {WelcomePage} from '../Pages/Welcome/Components/WelcomePage.tsx';
import {AddProductPage} from '../Pages/AddProduct/Components/AddProductPage.tsx';
import {ProductList} from '../Pages/ProductsList//Components/ProductList.tsx';
import {SingleProductPage} from '../Pages/SingleProduct/Components/SingleProductPage.tsx';

function App() {
  return(
    <div>
      {
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/add-product" element={<AddProductPage/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/product/:id" element={<SingleProductPage/>}/>
            <Route path="*" element={<h2>ERROR 404 PAGE NOT FOUND</h2>}/>
          </Routes>
        </Router>
      }
    </div>
  )
}

export default App
