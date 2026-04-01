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
        <div className="py-24 bg-slate-50 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h1 className="text-sm font-black text-primary-600 uppercase tracking-[0.2em] mb-4">Precision Science</h1>
                    <h2 className="text-5xl font-extrabold text-slate-900 heading-display">Elite Eye Care</h2>
                    <p className="mt-6 text-slate-600 text-xl leading-relaxed italic">
                        Combining clinical expertise with the latest diagnostic technology.
                    </p>
                </div>

                {/* Detailed Service List */}
                <div className="space-y-32">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Shield;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                                <div className="w-full lg:w-1/2 relative group animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                                    <div className="absolute -inset-4 bg-primary-400 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white z-10">
                                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            loading="lazy"
                                            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                                        />
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 space-y-10 card-premium p-12 lg:p-16 border-2 border-white">
                                    <div className="w-20 h-20 rounded-3xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                                        <IconComponent size={40} />
                                    </div>
                                    <h3 className="text-4xl font-extrabold text-slate-900 heading-display">{service.title}</h3>
                                    <p className="text-xl text-slate-600 leading-relaxed">
                                        {service.description} Our senior optometrists use precision-calibrated equipment to deliver results you can trust.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                        {['Medical Grade Diagnostics', 'Expert Consultation', 'Digital Imaging', 'Swift Delivery'].map((benefit, b_idx) => (
                                            <div key={b_idx} className="flex items-center gap-3 text-slate-700 font-bold bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                                <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center shrink-0 shadow-lg shadow-primary-200">
                                                    <Shield className="text-white" size={12} />
                                                </div>
                                                <span className="text-sm tracking-wide">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-10">
                                        <a
                                            href={`https://wa.me/919494303030?text=Hello%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(service.title)}%20service`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary w-full shadow-lg shadow-primary-100"
                                        >
                                            <MessageCircle size={24} className="mr-3" /> Secure Appointment <ArrowRight size={24} className="ml-3" />
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
