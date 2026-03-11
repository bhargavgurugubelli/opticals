import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Eye } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Services', path: '/services' },
        { name: 'Branches', path: '/branches' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-primary-50">


            {/* Main Nav */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-primary-50 p-2 rounded-xl text-primary-600">
                            <Eye size={28} />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary-800 to-primary-500 bg-clip-text text-transparent">EyeMax</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-base font-medium transition-colors hover:text-primary-600 ${isActive ? 'text-primary-600' : 'text-slate-600'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link to="/appointment" className="btn-primary py-2.5 px-5">
                            Book Appointment
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-primary-600 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full pb-4">
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
