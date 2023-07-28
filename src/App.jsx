import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GallaryView from "./pages/GallaryView";
import EditMenu from "./pages/EditMenu";
import "./css/App.css";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={< GallaryView />} />
          <Route path='/editMenu' element={< EditMenu />} />
        </Routes>
      </Router>
  )
}

export default App;
