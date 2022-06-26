import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Faq from './routes/Faq';
import Contact from './routes/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
