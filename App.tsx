import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Features } from './components/Features.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { DealGallery } from './components/DealGallery.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { ContactForm } from './components/ContactForm.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ChatWidget } from './components/ChatWidget.tsx';
import { SellerApplication } from './components/SellerApplication.tsx';
import { BuyerApplication } from './components/BuyerApplication.tsx';

const App: React.FC = () => {
  const [isSellerAppOpen, setIsSellerAppOpen] = useState(false);
  const [isBuyerAppOpen, setIsBuyerAppOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#apply' || hash === '#video-request') {
        setIsSellerAppOpen(true);
      } else if (hash === '#buy') {
        setIsBuyerAppOpen(true);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      if (href === '#apply' || href === '#video-request') {
        e.preventDefault();
        setIsSellerAppOpen(true);
      } else if (href === '#buy') {
        e.preventDefault();
        setIsBuyerAppOpen(true);
      } else if (href === '#') {
        e.preventDefault();
        setIsSellerAppOpen(false);
        setIsBuyerAppOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash) {
            window.history.pushState("", document.title, window.location.pathname + window.location.search);
        }
      } else {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          setIsSellerAppOpen(false);
          setIsBuyerAppOpen(false);
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', checkHash);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onApply={() => setIsSellerAppOpen(true)} 
        onBuy={() => setIsBuyerAppOpen(true)}
      />
      <main>
        <Hero 
          onApply={() => setIsSellerAppOpen(true)}
        />
        <Features />
        <HowItWorks />
        <DealGallery onJoinBuyerList={() => setIsBuyerAppOpen(true)} />
        <Testimonials />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
      
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-40 p-3 bg-amber-500 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <ChatWidget />
      
      <SellerApplication 
        isOpen={isSellerAppOpen} 
        onClose={() => {
          setIsSellerAppOpen(false);
          if (window.location.hash) window.history.pushState("", document.title, window.location.pathname + window.location.search);
        }} 
      />

      <BuyerApplication
        isOpen={isBuyerAppOpen}
        onClose={() => {
          setIsBuyerAppOpen(false);
          if (window.location.hash) window.history.pushState("", document.title, window.location.pathname + window.location.search);
        }}
      />
    </div>
  );
};

export default App;