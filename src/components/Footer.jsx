import { Link } from 'react-router-dom';
import { Eye, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-20 px-6 font-sans border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                {/* Brand */}
                <div className="space-y-8">
                    <Link to="/" className="flex items-center gap-3 text-white group">
                        <div className="bg-white p-2 rounded-xl">
                            <Eye className="text-primary-600" size={28} />
                        </div>
                        <span className="text-2xl font-black tracking-tighter heading-display">EYEMAX</span>
                    </Link>
                    <p className="text-lg leading-relaxed italic">
                        &quot;Redefining the optical standards in Srikakulam with clinical precision and boutique style.&quot;
                    </p>
                    <div className="flex gap-6 pt-2">
                        {[Facebook, Instagram, Twitter].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-black uppercase tracking-widest mb-8 text-sm">Experience</h3>
                    <ul className="space-y-4">
                        {['About Us', 'Our Services', 'Shop Glasses', 'Book Test'].map((link, i) => (
                            <li key={i}>
                                <Link to={`/${link.toLowerCase().replace(' ', '')}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-black uppercase tracking-widest mb-8 text-sm">Specialties</h3>
                    <ul className="space-y-4">
                        {['Computerized Testing', 'Premium Lenses', 'Designer Frames', 'Contact Care'].map((service, i) => (
                            <li key={i} className="hover:text-white transition-colors cursor-pointer text-sm">
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-black uppercase tracking-widest mb-8 text-sm">Concierge</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 text-sm leading-relaxed">
                            <MapPin size={20} className="text-primary-500 shrink-0" />
                            <span>Krishnapark Junction, Srikakulam 532001</span>
                        </li>
                        <li className="flex items-center gap-4 text-sm font-bold text-white">
                            <Phone size={20} className="text-primary-500 shrink-0" />
                            <span>+91 94943 03030</span>
                        </li>
                        <li className="flex items-center gap-4 text-sm">
                            <Mail size={20} className="text-primary-500 shrink-0" />
                            <span className="hover:text-white transition-colors">hello@eyemax.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-600">
                <p>&copy; {new Date().getFullYear()} EyeMax Opticals. Global Standards.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-primary-500 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary-500 transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
