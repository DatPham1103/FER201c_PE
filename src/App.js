import './index.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
