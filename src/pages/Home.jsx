import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, CheckCircle, ArrowRight, Eye, Glasses, ZoomIn, ScanEye, Sun, Monitor, Smile } from 'lucide-react';
import { services, testimonials } from '../data/demoData';

const iconMap = {
    Eye: Eye,
    Glasses: Glasses,
    ScanEye: ScanEye,
    Sun: Sun,
    Monitor: Monitor,
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
                            <Sparkles size={16} /> Certified Optometrist
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                            Clear Vision. <br /><span className="text-primary-600">Better Life.</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg">
                            Professional Eye Testing & Stylish Eyewear in Your City. Experience complete care for your eyes with advanced diagnostic equipment and a premium selection of frames.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link to="/appointment" className="btn-primary text-lg px-8">
                                Book Eye Test <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link to="/products" className="btn-secondary text-lg px-8">
                                View Frames
                            </Link>
                        </div>

                        <div className="pt-8 flex items-center gap-8">
                            <div className="space-y-1">
                                <h4 className="text-3xl font-bold text-slate-900">10k+</h4>
                                <p className="text-sm text-slate-500 font-medium">Happy Patients</p>
                            </div>
                            <div className="w-px h-12 bg-slate-300"></div>
                            <div className="space-y-1">
                                <h4 className="text-3xl font-bold text-slate-900">5+</h4>
                                <p className="text-sm text-slate-500 font-medium">Years Experience</p>
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
                            src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=1200"
                            alt="Professional optometrist checking patient vision"
                            className="w-full h-full object-cover rounded-2xl md:aspect-[4/5] lg:aspect-square transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold text-primary-600 uppercase tracking-wide">Our Expertise</h2>
                        <h3 className="mt-2 text-4xl font-extrabold text-slate-900">Comprehensive Eye Care Services</h3>
                        <p className="mt-4 text-slate-600 text-lg">We offer a wide range of services to ensure your eyes are healthy and your vision is crystal clear.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => {
                            const IconComponent = iconMap[service.icon] || Shield;
                            return (
                                <div key={service.id} className="card p-8 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                        <IconComponent size={28} />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h4>
                                    <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
                                    <Link to="/services" className="text-primary-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex flex-row items-center gap-1">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary-100 translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1542665952-14513db15293?auto=format&fit=crop&q=80&w=1200"
                            alt="Advanced Eye Care Equipment"
                            className="rounded-3xl shadow-xl object-cover w-full h-[500px]"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-sm font-bold text-primary-600 uppercase tracking-wide">Why Choose Us</h2>
                        <h3 className="text-4xl font-extrabold text-slate-900">Modern Eye Care with a Personal Touch</h3>
                        <p className="text-slate-600 text-lg">
                            At EyeMax Opticals, we combine advanced digital diagnostic technology with a vast collection of premium eyewear to deliver a complete optical solution.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {[
                                'Free Initial Checkup Camp',
                                'Latest Diagnostic Machines',
                                '1000+ Stunning Frame Designs',
                                'Highly Affordable Pricing',
                                'Friendly & Professional Staff'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 shrink-0" size={24} />
                                    <span className="text-slate-700 font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <Link to="/about" className="btn-secondary">Read Our Story <ArrowRight size={20} className="ml-2" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-sm font-bold text-primary-600 uppercase tracking-wide mb-2">Testimonials</h2>
                    <h3 className="text-4xl font-extrabold text-slate-900 mb-16">What Our Patients Say</h3>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {testimonials.map((review) => (
                            <div key={review.id} className="card p-8 relative">
                                <div className="text-yellow-400 flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-slate-300'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <p className="text-slate-700 italic mb-6">"{review.text}"</p>
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

            {/* CTA Section */}
            <section className="py-24 bg-primary-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550505096-121f64939b4b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready for Clearer Vision?</h2>
                    <p className="text-xl text-primary-100 mb-10">Book your eye test today and let our specialists help you find the perfect lenses.</p>
                    <Link to="/appointment" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-primary-600 bg-white hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-xl">
                        Book Your Eye Test Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
