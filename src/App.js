import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./user/AddUser";
import EditUser from "./user/EditUser";
import ViewUser from "./user/ViewUser";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
