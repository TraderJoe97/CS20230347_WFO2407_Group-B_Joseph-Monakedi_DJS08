import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

import "./server"
function App() {

  return (
    <BrowserRouter>
      <header>
        <NavLink className="site-logo" to ="/">#VanLife</NavLink>
        <nav>
          <NavLink to ="/about">About</NavLink>
          <NavLink to ="/vans">Vans</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App