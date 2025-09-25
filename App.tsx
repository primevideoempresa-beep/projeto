
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { siteData } from './data';
import { HomePage } from './pages/HomePage';
import { VideoCreationPage } from './pages/VideoCreationPage';
import { ImageGenerationPage } from './pages/ImageGenerationPage';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState<'login' | 'signup'>('signup');

  const openModal = (view: 'login' | 'signup') => {
    setModalView(view);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans flex flex-col">
      <Header 
        siteName={siteData.site_name} 
        onLoginClick={() => openModal('login')}
        onSignUpClick={() => openModal('signup')}
      />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onStartCreatingClick={() => openModal('signup')} />} />
          <Route path="/video-creation" element={<VideoCreationPage />} />
          <Route path="/image-generation" element={<ImageGenerationPage />} />
        </Routes>
      </main>
      <Footer siteName={siteData.site_name} email={siteData.contact_email} />
      <AuthModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        initialView={modalView}
      />
    </div>
  );
};

export default App;