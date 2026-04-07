import { Link } from 'react-router-dom';

const Logo = ({ className = "" }) => {
    return (
        <Link to="/" className={`flex items-center group outline-none ${className}`}>
            <div className="relative">
                <img 
                    src="/assets/images/logo.jpg" 
                    alt="EyeMax" 
                    className="h-10 md:h-14 w-auto transition-all duration-500 group-hover:scale-105 invert brightness-90 contrast-125 hue-rotate-180 mix-blend-screen opacity-80 group-hover:opacity-100"
                />
                {/* Subtle glow behind the logo */}
                <div className="absolute inset-x-0 -inset-y-2 bg-primary-600/10 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
        </Link>
    );
};

export default Logo;
