import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route unique path="/shoes" element={<Home/>}/>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
