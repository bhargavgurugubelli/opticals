import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useScrollReveal from '../hooks/useScrollReveal';
import { MessageCircle, Phone } from 'lucide-react';

const MainLayout = () => {
    useScrollReveal();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-[80px]">
                {/* pt adjusts for fixed header */}
                <Outlet />
            </main>
            <Footer />

            {/* WhatsApp Floating Button - Premium Redesign */}
            <a
                href="https://wa.me/919494303030?text=Hello%20EyeMax,%20I%20would%20like%20to%20chat!"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex fixed bottom-8 right-8 z-50 group items-center gap-4"
                aria-label="Chat on WhatsApp"
            >
                <div className="flex flex-col items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <span className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-2xl">
                        Chat with us
                    </span>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-primary-600 rounded-full blur-xl opacity-40 group-hover:opacity-80 animate-pulse transition-opacity"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20">
                        <MessageCircle size={32} />
                    </div>
                </div>
            </a>

            {/* Mobile Sticky CTA - Premium Redesign */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
                <div className="bg-dark-400/80 backdrop-blur-2xl border border-white/10 p-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex gap-3">
                    <a href="tel:+919494303030" className="flex-1 btn-secondary !py-3 !px-4 !text-xs flex items-center justify-center gap-2">
                        <Phone size={16} /> Call Now
                    </a>
                    <a href="https://wa.me/919494303030?text=Hello%20I%20want%20to%20book%20an%20eye%20test" target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary-600 text-white hover:bg-primary-500 rounded-xl py-3 flex items-center justify-center text-xs font-bold gap-2 transition-all">
                        <MessageCircle size={16} /> WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
