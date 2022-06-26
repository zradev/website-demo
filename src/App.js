import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './routes/Pricing';
import Faq from './routes/Faq';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
