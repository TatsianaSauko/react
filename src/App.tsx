import "../src/index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import UncontrolledForm from "./pages/UncontrolledForm";
import HookForm from "./pages/HookForm";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="menu">
            <li>
              <Link className="link" to="/">
                Main Page
              </Link>
            </li>
            <li>
              <Link className="link" to="/formPage">
                FormPage
              </Link>
            </li>
            <li>
              <Link className="link" to="/hookFormPage">
                HookFormPage
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/formPage" element={<UncontrolledForm />} />
          <Route path="/hookFormPage" element={<HookForm />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}
