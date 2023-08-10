import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GallaryView from "./pages/GallaryView";
import EditMenu from "./pages/EditMenu";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GallaryView />} />
          <Route path="/editMenu" element={<EditMenu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
