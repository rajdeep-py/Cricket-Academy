import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home from './Home';
import AboutPage from './AboutPage';
import ProgramsPage from './ProgramsPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';
import TermsPage from './TermsPage';
import PrivacyPage from './PrivacyPage';

export default function Layout() {
  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen selection:bg-red-600 selection:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-100px] left-[-100px] w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>
      <div className="fixed bottom-[-100px] right-[-100px] w-96 h-96 bg-red-800 rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
