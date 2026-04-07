import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, ArrowRight, Eye, Glasses, ScanEye, Monitor, Sun, Smile, MapPin, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { services, testimonials, branches, products, heroSlides } from '../data/demoData';
import useScrollReveal from '../hooks/useScrollReveal';

const iconMap = {
    Eye: Eye,
    Glasses: Glasses,
    ScanEye: ScanEye,
    Monitor: Monitor,
    Sun: Sun,
    Smile: Smile,
};

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useScrollReveal();

    const randomProducts = useMemo(() => {
        return [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

    return (
        <div className="w-full font-sans">
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-dark-500">
                {/* Carousel Container */}
                <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {heroSlides.map((slide) => (
                        <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
                            {/* Background Image With Overlay */}
                            <div className="absolute inset-0">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover opacity-30 transform scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-dark-500 via-dark-500/80 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
                                <div className="grid md:grid-cols-2 gap-16 items-center w-full">
                                    <div className={`space-y-10 transition-all duration-1000 delay-500 ${currentSlide === slide.id - 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-primary-400 font-bold text-xs uppercase tracking-widest">
                                            <Sparkles size={18} className="text-primary-500 animate-pulse" />
                                            <span>{slide.badge}</span>
                                        </div>

                                        <h1 className="text-6xl lg:text-8xl font-black text-white heading-display leading-none">
                                            {slide.title} <br />
                                            <span className="text-gradient">{slide.subtitle}</span>
                                        </h1>

                                        <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                                            {slide.description}
                                        </p>

                                        <div className="flex flex-wrap gap-6 pt-4">
                                            <a
                                                href="https://wa.me/919494303030?text=Hello%20EyeMax,%20I%20want%20to%20book%20an%20Appointment!"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary"
                                            >
                                                <MessageCircle size={22} className="mr-2" /> Book Appointment
                                            </a>
                                            <Link to="/products" className="btn-secondary">
                                                Explore Collection
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Desktop Image Preview */}
                                    <div className="hidden md:block relative group">
                                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary-400 to-indigo-400 rounded-3xl blur-2xl opacity-20 transition-opacity duration-700"></div>
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white/10 backdrop-blur-sm animate-float">
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="w-full aspect-square object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 z-20">
                    <button onClick={prevSlide} className="p-4 rounded-full border border-white/10 text-white hover:bg-primary-600 hover:border-primary-600 transition-all group">
                        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="flex gap-3">
                        {heroSlides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === idx ? 'w-10 bg-primary-600' : 'w-4 bg-white/20'}`}
                            ></button>
                        ))}
                    </div>

                    <button onClick={nextSlide} className="p-4 rounded-full border border-white/10 text-white hover:bg-primary-600 hover:border-primary-600 transition-all group">
                        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Background Blobs */}
                <div className="blur-blob w-96 h-96 bg-primary-600/20 top-[-10%] right-[-5%] z-0 animate-pulse"></div>
                <div className="blur-blob w-[500px] h-[500px] bg-red-500/10 bottom-[-20%] left-[-10%] z-0"></div>
            </section>

            {/* Popular Products Preview */}
            <section className="py-24 bg-dark-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-black text-primary-500 uppercase tracking-[0.2em] mb-4">Latest Trends</h2>
                            <h3 className="text-4xl lg:text-5xl font-extrabold text-white heading-display">Best Selling Glasses</h3>
                        </div>
                        <Link to="/products" className="group flex items-center gap-3 text-white font-bold text-lg hover:text-primary-500 transition-colors">
                            View All Styles <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {randomProducts.map((product, idx) => (
                            <div key={product.id} className={`card-premium group relative reveal reveal-delay-${idx + 1} hover-3d transition-transform duration-500`}>
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.15em] text-slate-900 shadow-sm border border-slate-100">
                                        {product.category || 'Luxury'}
                                    </span>
                                </div>
                                <div className="bg-slate-50/50 p-12 rounded-[2rem] m-3 overflow-hidden aspect-[4/5] flex items-center justify-center relative transition-colors duration-500 group-hover:bg-primary-50/30">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000 ease-out z-10 filter drop-shadow-xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/5 to-transparent"></div>
                                </div>
                                <div className="p-8 pt-2">
                                    <h4 className="text-xl font-extrabold text-white mb-2 leading-tight group-hover:text-primary-500 transition-colors">{product.name}</h4>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">In Stock</span>
                                        </div>
                                        <div className="text-primary-500 font-bold text-xs uppercase tracking-tighter">Premium Grade</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-24 bg-dark-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-black text-primary-500 uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-white heading-display">Expert Eye Care</h3>
                        <p className="mt-6 text-slate-400 text-xl leading-relaxed italic">
                            &quot;Giving you the gift of clear vision since 2010 with care and trust.&quot;
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.slice(0, 3).map((service, idx) => {
                            const IconComponent = iconMap[service.icon] || Shield;
                            return (
                                <div key={service.id} className={`card-premium p-10 flex flex-col group hover:bg-white/[0.05] transition-colors duration-500 reveal reveal-delay-${idx + 1}`}>
                                    <div className="w-16 h-16 rounded-2xl bg-primary-950/30 text-primary-500 flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 border border-primary-500/20">
                                        <IconComponent size={32} />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors">{service.title}</h4>
                                    <p className="text-slate-400 mb-8 flex-grow leading-relaxed group-hover:text-slate-300 transition-colors">{service.description}</p>
                                    <div className="w-12 h-1 bg-primary-600/30 group-hover:w-full group-hover:bg-primary-600 transition-all duration-500"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Branch Locations Preview */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-black text-primary-400 uppercase tracking-[0.3em] mb-4">Visit Us</h2>
                        <h3 className="text-4xl lg:text-6xl font-extrabold text-white heading-display">Our Showrooms</h3>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {branches.map((branch, idx) => (
                            <div key={branch.id} className={`relative group p-10 rounded-[3rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.08] hover:border-primary-500/30 transition-all duration-700 overflow-hidden reveal reveal-delay-${idx + 1}`}>
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-600/10 rounded-full blur-3xl group-hover:bg-primary-600/20 transition-colors duration-700"></div>
                                
                                <h4 className="text-3xl font-black text-white mb-6 group-hover:text-primary-400 transition-colors heading-display">{branch.name}</h4>
                                <div className="space-y-6 mb-12 text-slate-400 text-lg leading-relaxed relative z-10">
                                    <p className="flex items-start gap-4">
                                        <MapPin className="text-primary-500 shrink-0 mt-1" size={24} />
                                        <span className="font-medium">{branch.address}</span>
                                    </p>
                                </div>
                                
                                <a
                                    href={branch.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 w-full py-5 rounded-2xl bg-white text-slate-900 font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-primary-600 hover:text-white hover:shadow-[0_0_40px_rgba(225,29,72,0.3)] transition-all duration-500"
                                >
                                    Get Directions <ArrowRight size={18} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-dark-400 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
                    <h2 className="text-sm font-black text-primary-500 uppercase tracking-[0.3em] mb-4">What Customers Say</h2>
                    <h3 className="text-4xl lg:text-6xl font-black text-white heading-display">They Trust Us</h3>
                </div>

                <div className="marquee-container pause-on-hover relative">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-400 to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-400 to-transparent z-10"></div>
                    
                    <div className="marquee-content">
                        {testimonials.map((review, i) => (
                            <div key={`${review.id}-${i}`} className="w-[300px] md:w-[450px] shrink-0 card-premium p-6 md:p-10 bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:bg-white/[0.05] transition-all duration-500">
                                <div>
                                    <div className="text-yellow-500 flex gap-1 mb-6 md:mb-8">
                                        {[...Array(5)].map((_, star_idx) => (
                                            <svg key={star_idx} className={`w-4 h-4 md:w-5 md:h-5 ${star_idx < review.rating ? 'fill-current' : 'text-slate-700'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-slate-400 text-base md:text-xl leading-relaxed italic mb-6 md:mb-10">&quot;{review.text}&quot;</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-white/10 pt-6 md:pt-8 mt-4">
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary-600 flex items-center justify-center text-white font-black text-lg md:text-xl heading-display shadow-lg shadow-primary-900/20">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="text-left">
                                        <h5 className="font-extrabold text-white text-base md:text-lg">{review.name}</h5>
                                        <p className="text-[10px] md:text-xs font-black text-primary-500 uppercase tracking-widest">Happy Customer</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="marquee-content" aria-hidden="true">
                        {testimonials.map((review, i) => (
                            <div key={`dup-${review.id}-${i}`} className="w-[300px] md:w-[450px] shrink-0 card-premium p-6 md:p-10 bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:bg-white/[0.05] transition-all duration-500">
                                <div>
                                    <div className="text-yellow-500 flex gap-1 mb-6 md:mb-8">
                                        {[...Array(5)].map((_, star_idx) => (
                                            <svg key={star_idx} className={`w-4 h-4 md:w-5 md:h-5 ${star_idx < review.rating ? 'fill-current' : 'text-slate-700'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-slate-400 text-base md:text-xl leading-relaxed italic mb-6 md:mb-10">&quot;{review.text}&quot;</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-white/10 pt-6 md:pt-8 mt-4">
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary-600 flex items-center justify-center text-white font-black text-lg md:text-xl heading-display shadow-lg shadow-primary-900/20">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="text-left">
                                        <h5 className="font-extrabold text-white text-base md:text-lg">{review.name}</h5>
                                        <p className="text-[10px] md:text-xs font-black text-primary-500 uppercase tracking-widest">Happy Customer</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
