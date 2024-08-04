import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { Home } from "./Component/Home";
import { About } from "./Component/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./Component/Alert";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is amazing" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
