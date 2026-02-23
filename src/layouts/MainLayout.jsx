import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-[104px]">
                {/* pt adjusts for fixed header + topbar */}
                <Outlet />
            </main>
            <Footer />

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-green-600 transition-all duration-300 flex items-center justify-center pulse-animation"
                aria-label="Chat on WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
            </a>

            {/* Mobile Sticky CTA */}
            <div className="md:hidden fixed bottom-0 w-full z-40 bg-white border-t p-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
                <div className="flex gap-3">
                    <a href="tel:+919123456789" className="flex-1 btn-secondary py-2">Call Now</a>
                    <a href="/appointment" className="flex-1 btn-primary py-2 text-center text-sm font-medium">Book Eye Test</a>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
