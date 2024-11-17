import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";

import "./server"
function App() {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to ="/">#VANLIFE</NavLink>
          <NavLink to ="/about">About</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App