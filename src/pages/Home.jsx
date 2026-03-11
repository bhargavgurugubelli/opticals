import { Link } from 'react-router-dom';
import { Shield, Sparkles, ArrowRight, Eye, Glasses, ScanEye, Monitor, Sun, Smile, MapPin, MessageCircle } from 'lucide-react';
import { services, testimonials, branches, optoHeroImg, products } from '../data/demoData';

const iconMap = {
    Eye: Eye,
    Glasses: Glasses,
    ScanEye: ScanEye,
    Monitor: Monitor,
    Sun: Sun,
    Smile: Smile,
};

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="hero-gradient relative overflow-hidden py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 z-10">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
                            <Sparkles size={16} /> Best Opticals in Srikakulam
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                            Clear Vision. <br /><span className="text-primary-600">Starts Here.</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg">
                            Premium eyeglasses, sunglasses, and exceptional eye care services. Visit our local branches or book an appointment on WhatsApp instantly.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="https://wa.me/919876543210?text=Hello%20EyeMax,%20I%20want%20to%20book%20an%20Appointment!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 py-3.5 px-8 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                <MessageCircle size={20} /> Book Appointment
                            </a>
                            <Link to="/products" className="btn-secondary text-lg px-8 rounded-full hover:scale-105 transition-all">
                                View Products
                            </Link>
                        </div>

                        <div className="pt-8 flex flex-wrap items-center gap-8">
                            <div className="space-y-1">
                                <h4 className="text-3xl font-bold text-slate-900">3</h4>
                                <p className="text-sm text-slate-500 font-medium">Local Branches</p>
                            </div>
                            <div className="w-px h-12 bg-slate-300"></div>
                            <div className="space-y-1">
                                <h4 className="text-3xl font-bold text-slate-900">10k+</h4>
                                <p className="text-sm text-slate-500 font-medium">Happy Patients</p>
                            </div>
                            <div className="w-px h-12 bg-slate-300"></div>
                            <div className="space-y-1">
                                <h4 className="text-3xl font-bold text-slate-900">1k+</h4>
                                <p className="text-sm text-slate-500 font-medium">Eye Frames</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={optoHeroImg}
                            alt="Professional optometrist checking patient vision"
                            loading="lazy"
                            className="w-full h-full object-cover rounded-2xl md:aspect-[4/5] lg:aspect-square transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Popular Products Preview */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold text-primary-600 uppercase tracking-wide">Featured Collection</h2>
                        <h3 className="mt-2 text-4xl font-extrabold text-slate-900">Popular Eyewear</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.slice(0, 4).map((product) => (
                            <div key={product.id} className="card bg-white p-6 group hover:shadow-xl transition-all duration-300">
                                <div className="bg-slate-100 p-8 rounded-xl mb-6 overflow-hidden aspect-square flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        className="w-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="text-center">
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h4>
                                    <p className="text-slate-500 italic">Available in store</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/products" className="btn-secondary rounded-full px-8 hover:scale-105 transition-all">Explore All Catalog</Link>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold text-primary-600 uppercase tracking-wide">Our Expertise</h2>
                        <h3 className="mt-2 text-4xl font-extrabold text-slate-900">Comprehensive Eye Care</h3>
                        <p className="mt-4 text-slate-600 text-lg">We offer a wide range of services to ensure your eyes are healthy and your vision is crystal clear.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.slice(0, 3).map((service) => {
                            const IconComponent = iconMap[service.icon] || Shield;
                            return (
                                <div key={service.id} className="card p-8 group border border-slate-100 hover:border-primary-100">
                                    <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                        <IconComponent size={28} />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h4>
                                    <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/services" className="text-primary-600 hover:underline font-bold inline-flex items-center text-lg">
                            See all services <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Branch Locations Preview */}
            <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-800 opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-sm font-bold text-primary-200 uppercase tracking-wide mb-2">Visit Us</h2>
                    <h3 className="text-4xl font-extrabold text-white mb-16">Our Branch Locations</h3>

                    <div className="grid lg:grid-cols-3 gap-8 text-left">
                        {branches.map((branch) => (
                            <div key={branch.id} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                                <h4 className="text-2xl font-bold text-white mb-4">{branch.name}</h4>
                                <div className="space-y-4 mb-8 text-primary-100 text-sm">
                                    <p className="flex items-start gap-2">
                                        <MapPin className="text-primary-200 shrink-0 mt-0.5" size={18} />
                                        {branch.address}
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <a
                                        href={branch.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-white/20 hover:bg-white border border-white/30 hover:border-white text-white hover:text-primary-700 font-semibold py-3 px-4 rounded-xl transition-colors duration-300 flex justify-center text-center text-sm"
                                    >
                                        View Map
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-sm font-bold text-primary-600 uppercase tracking-wide mb-2">Testimonials</h2>
                    <h3 className="text-4xl font-extrabold text-slate-900 mb-16">What Our Patients Say</h3>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {testimonials.map((review) => (
                            <div key={review.id} className="card bg-white shadow-soft p-8 relative transform hover:-translate-y-1 transition-transform">
                                <div className="text-yellow-400 flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-slate-300'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <p className="text-slate-700 italic mb-6 leading-relaxed">&quot;{review.text}&quot;</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                                        {review.name.charAt(0)}
                                    </div>
                                    <span className="font-semibold text-slate-900">{review.name}</span>
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
