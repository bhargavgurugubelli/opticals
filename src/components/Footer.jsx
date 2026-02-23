import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="space-y-4">
                    <Link to="/" className="flex items-center gap-2 text-white">
                        <Eye className="text-primary-500" size={32} />
                        <span className="text-2xl font-bold tracking-tight">EyeMax</span>
                    </Link>
                    <p className="text-sm text-slate-400">
                        Professional Eye Testing & Stylish Eyewear in Your City. Clear Vision. Better Life.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="hover:text-primary-400 transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-primary-400 transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-primary-400 transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
                        <li><Link to="/products" className="hover:text-primary-400 transition-colors">Shop Glasses</Link></li>
                        <li><Link to="/appointment" className="hover:text-primary-400 transition-colors">Book Test</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
                    <ul className="space-y-2">
                        <li className="text-sm hover:text-primary-400">Computerized Eye Test</li>
                        <li className="text-sm hover:text-primary-400">Prescription Lenses</li>
                        <li className="text-sm hover:text-primary-400">Contact Lenses Check</li>
                        <li className="text-sm hover:text-primary-400">Frame Customization</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-sm">
                            <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                            <span>123 Main Road, City Center, Your City 40001</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm">
                            <Phone size={18} className="text-primary-500 shrink-0" />
                            <span>+91 91234 56789</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm">
                            <Mail size={18} className="text-primary-500 shrink-0" />
                            <span>info@eyemaxopticals.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
                &copy; {new Date().getFullYear()} EyeMax Opticals. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
