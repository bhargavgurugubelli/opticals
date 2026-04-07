import { Link } from 'react-router-dom';
import { Eye, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Glasses } from 'lucide-react';
import Logo from './common/Logo';

const Footer = () => {
    return (
        <footer className="relative bg-black text-slate-500 py-32 px-6 font-sans border-t border-white/5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-600/50 to-transparent"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary-600/5 rounded-full blur-[120px]"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                {/* Brand */}
                <div className="space-y-8">
                    <Logo />
                    <p className="text-lg leading-relaxed italic">
                        &quot;Redefining the optical standards in Srikakulam with clinical precision and boutique style.&quot;
                    </p>
                    <div className="flex gap-6 pt-2">
                        {[Facebook, Instagram, Twitter].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all duration-500 border border-white/5">
                                <Icon size={20} />
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
                                <Link to={`/${link.toLowerCase().replace(' ', '')}`} className="hover:text-primary-500 transition-all flex items-center gap-2 group translate-x-0 hover:translate-x-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-600 scale-0 group-hover:scale-100 transition-transform"></div>
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
                            <li key={i} className="hover:text-primary-400 transition-colors cursor-pointer text-sm">
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
