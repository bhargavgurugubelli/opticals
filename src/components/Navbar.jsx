import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
        <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            {/* Main Nav */}
            <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="flex justify-between h-20 items-center">
                    <Link to="/" className="flex items-center group">
                        <div className="transition-all duration-500">
                            <img src="/assets/images/logo.jpg" alt="EyeMax" className="h-12 md:h-16 w-auto transition-transform duration-700 group-hover:scale-110" />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-[13px] font-black tracking-[0.1em] uppercase transition-all duration-300 hover:text-primary-600 relative group/link ${isActive ? 'text-primary-600' : 'text-slate-500'}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 bg-primary-600 transition-all duration-300 rounded-full ${isActive ? 'w-4' : 'w-0 group-hover/link:w-4'}`}></span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                        <Link to="/appointment" className="btn-primary py-3 px-8 text-xs uppercase tracking-widest">
                            Book Appointment
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="xl:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-3 text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-2xl transition-all"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile nav */}
            {isOpen && (
                <div className="xl:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full pb-4">
                    <div className="px-4 pt-2 space-y-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-3 rounded-lg text-base font-medium ${isActive ? 'bg-primary-50 text-primary-600' : 'text-slate-700 hover:bg-slate-50'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="mt-4 px-3 pb-3">
                            <Link to="/appointment" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center">
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
