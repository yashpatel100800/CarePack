import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileQuickActions from './components/layout/MobileQuickActions';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Prescribers from './pages/Prescribers';
import Patients from './pages/Patients';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import TransferPage from './pages/TransferPage';
import RefillPage from './pages/RefillPage';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen pb-20 md:pb-0">
                <ScrollToTop />
                {/* pb-20 added for mobile to offset the fixed MobileQuickActions bar */}
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/prescribers" element={<Prescribers />} />
                        <Route path="/patients" element={<Patients />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                        <Route path="/terms" element={<TermsOfService />} />
                        <Route path="/transfer" element={<TransferPage />} />
                        <Route path="/refill" element={<RefillPage />} />
                    </Routes>
                </main>
                <Footer />
                <MobileQuickActions />
            </div>
        </Router>
    );
}

export default App;
