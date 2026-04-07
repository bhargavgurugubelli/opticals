import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Glasses } from 'lucide-react';
import Logo from './common/Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Brands', path: '/brands' },
        { name: 'Services', path: '/services' },
        { name: 'Branches', path: '/branches' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-dark-500/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
            {/* Main Nav */}
            <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="flex justify-between h-20 items-center">
                    <Logo />

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 hover:text-primary-500 relative group/link ${isActive ? 'text-primary-500' : 'text-slate-400'}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-500 rounded-full ${isActive ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                        <Link to="/appointment" className="btn-primary !py-3.5 !px-10 !text-[10px] uppercase tracking-widest hover:shadow-primary-950/20">
                            Book Appointment
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="xl:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-3 text-white hover:text-primary-500 hover:bg-white/5 rounded-2xl transition-all"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile nav */}
            {isOpen && (
                <div className="xl:hidden bg-dark-500/95 backdrop-blur-3xl border-t border-white/5 shadow-2xl absolute w-full pb-8">
                    <div className="px-6 pt-6 space-y-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${isActive ? 'bg-primary-600/10 text-primary-500' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="mt-8 px-6 pt-6 border-t border-white/5">
                            <Link to="/appointment" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center !py-5">
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
