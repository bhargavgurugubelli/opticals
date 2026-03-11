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
                href="https://wa.me/919876543210?text=Hello%20EyeMax,%20I%20would%20like%20to%20chat!"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-green-600 transition-all duration-300 flex items-center justify-center pulse-animation"
                aria-label="Chat on WhatsApp"
            >
                <span className="hidden md:block mr-2 font-medium">Chat with us on WhatsApp</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
            </a>

            {/* Mobile Sticky CTA */}
            <div className="md:hidden fixed bottom-0 w-full z-40 bg-white border-t p-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
                <div className="flex gap-3">
                    <a href="tel:+919876543210" className="flex-1 btn-secondary py-2">Call Now</a>
                    <a href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20book%20an%20eye%20test%20appointment" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 text-white hover:bg-green-600 rounded-xl py-2 flex items-center justify-center text-sm font-medium">WhatsApp</a>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
