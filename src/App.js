
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Layout/pages/Home";
import About from "./components/Layout/pages/About";
import Menu from './components/Layout/pages/Menu';
import Pagenotfound from './components/Layout/pages/Pagenotfound';
import Contact from './components/Layout/pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
