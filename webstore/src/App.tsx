import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {WelcomePage} from '../Pages/Welcome/Components/WelcomePage.tsx';

function App() {
  return(
    <div>
      {
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage/>}/>
          </Routes>
        </Router>
      }
    </div>
  )
}

export default App
