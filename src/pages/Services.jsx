import { services } from '../data/demoData';
import { Shield, ArrowRight, Eye, Glasses, ScanEye, Monitor, Sun, Smile, MessageCircle } from 'lucide-react';

const iconMap = {
    Eye: Eye,
    Glasses: Glasses,
    ScanEye: ScanEye,
    Monitor: Monitor,
    Sun: Sun,
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
                <div className="space-y-20">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Shield;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>

                                <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl relative group">
                                    <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading="lazy"
                                        className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                                        <IconComponent size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900">{service.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {service.description} We utilize the latest equipment and highly trained staff to ensure maximum comfort and superior results.
                                    </p>

                                    <ul className="space-y-3 pt-2">
                                        {['Certified Professionals', 'Modern Diagnostics', '100% Satisfaction'].map((benefit, b_idx) => (
                                            <li key={b_idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                    <Shield className="text-green-600" size={14} />
                                                </div>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-6">
                                        <a
                                            href={`https://wa.me/919876543210?text=Hello%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(service.title)}%20service`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex w-full sm:w-auto items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 gap-2"
                                        >
                                            <MessageCircle size={20} /> Book Service <ArrowRight size={20} className="ml-2" />
                                        </a>
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
