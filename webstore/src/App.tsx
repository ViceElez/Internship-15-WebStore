import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {WelcomePage} from '../Pages/Welcome/Components/WelcomePage.tsx';
import {AddProductPage} from '../Pages/AddProduct/Components/AddProductPage.tsx';

function App() {
  return(
    <div>
      {
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/add-product" element={<AddProductPage/>}/>
            <Route path="*" element={<h2>ERROR 404 PAGE NOT FOUND</h2>}/>
          </Routes>
        </Router>
      }
    </div>
  )
}

export default App
