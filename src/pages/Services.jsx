import React from 'react';
import { services } from '../data/demoData';
import { Shield, ArrowRight, Eye, Glasses, ScanEye, Sun, Monitor, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
    Eye: Eye,
    Glasses: Glasses,
    ScanEye: ScanEye,
    Sun: Sun,
    Monitor: Monitor,
    Smile: Smile,
};

const Services = () => {
    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-sm font-bold text-primary-600 uppercase tracking-wide">Our Services</h1>
                    <h2 className="mt-2 text-4xl font-extrabold text-slate-900">Comprehensive Solutions for Your Eyes</h2>
                    <p className="mt-4 text-slate-600 text-lg">From advanced diagnostics to fashionable frames, we provide full-spectrum eye care.</p>
                </div>

                {/* Detailed Service List */}
                <div className="space-y-16">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Shield;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                                {/* Image Placeholder matched conceptually to service */}
                                <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl relative group">
                                    <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={`https://images.unsplash.com/photo-${['1589330105307-e435964f40f0', '1511499767150-a48a237f0083', '1550505096-121f64939b4b', '1541364983171-a8ba01e95cfc', '1628189675276-8806214ed0b2', '1509695507497-903c140c43b0'][index % 6]}?auto=format&fit=crop&q=80&w=1200`}
                                        alt={service.title}
                                        className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-primary-700 font-bold shadow-lg">
                                        {service.price}
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center">
                                        <IconComponent size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900">{service.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {service.description} We utilize the latest equipment to ensure accurate results. Your eye health is our top priority, and we tailor our solutions to fit your lifestyle needs completely.
                                    </p>

                                    <ul className="space-y-3 pt-2">
                                        {['Certified Professionals', 'Modern Equipment', 'Affordable Plans'].map((benefit, b_idx) => (
                                            <li key={b_idx} className="flex items-center gap-2 text-slate-700 font-medium">
                                                <Shield className="text-green-500" size={20} />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-6">
                                        <Link to="/appointment" className="btn-primary inline-flex">
                                            Book This Service <ArrowRight size={20} className="ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
