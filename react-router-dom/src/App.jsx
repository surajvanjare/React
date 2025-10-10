import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./pages/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    // 👇 Everything that uses <Link> or <Route> MUST be inside this
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
