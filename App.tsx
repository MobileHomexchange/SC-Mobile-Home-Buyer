import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import SellerApplication from './components/SellerApplication';
import MHEvaluator from './components/MHEvaluator';

function App() {
  const [isSellerAppOpen, setIsSellerAppOpen] = useState(false);
  const [isEvaluatorOpen, setIsEvaluatorOpen] = useState(false);

  const handleGetOffer = () => {
    setIsSellerAppOpen(true);
  };

  const handleEvaluate = () => {
    setIsEvaluatorOpen(true);
  };

  const handleEvaluatorConvert = () => {
    setIsEvaluatorOpen(false);
    setIsSellerAppOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header onEvaluate={handleEvaluate} />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage onGetOffer={handleGetOffer} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        
        <SellerApplication 
          isOpen={isSellerAppOpen} 
          onClose={() => setIsSellerAppOpen(false)} 
        />
        
        <MHEvaluator 
          isOpen={isEvaluatorOpen}
          onClose={() => setIsEvaluatorOpen(false)}
          onConvert={handleEvaluatorConvert}
        />
      </div>
    </Router>
  );
}

export default App;
