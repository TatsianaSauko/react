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
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/form1">Form 1</Link>
            </li>
            <li>
              <Link to="/form2">Form 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/form1" element={<UncontrolledForm />} />
          <Route path="/form2" element={<HookForm />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}
