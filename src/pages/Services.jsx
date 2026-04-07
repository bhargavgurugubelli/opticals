import { services, lensTypes } from '../data/demoData';
import { Shield, ArrowRight, Eye, Glasses, ScanEye, Monitor, Sun, Smile, MessageCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const iconMap = {
    Eye: Eye,
    Glasses: Glasses,
    ScanEye: ScanEye,
    Monitor: Monitor,
    Sun: Sun,
    Smile: Smile,
};

const Services = () => {
    useScrollReveal();
    return (
        <div className="py-24 bg-dark-500 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h1 className="text-sm font-black text-primary-500 uppercase tracking-[0.2em] mb-4">Advanced Testing</h1>
                    <h2 className="text-5xl font-extrabold text-white heading-display">Best Eye Care</h2>
                    <p className="mt-6 text-slate-400 text-xl leading-relaxed italic">
                        Expert eye testing with the latest computer machines for perfect vision.
                    </p>
                </div>

                {/* Detailed Service List */}
                <div className="space-y-32">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Shield;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                                <div className="w-full lg:w-1/2 relative group animate-float reveal" style={{ animationDelay: `${index * 0.5}s` }}>
                                    <div className="absolute -inset-4 bg-primary-600 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white/5 z-10">
                                        <div className="absolute inset-0 bg-dark-500/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            loading="lazy"
                                            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                                        />
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 space-y-10 card-premium p-12 lg:p-16 border-white/5 reveal reveal-delay-2">
                                    <div className="w-20 h-20 rounded-3xl bg-primary-950/20 text-primary-500 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 border border-primary-500/20">
                                        <IconComponent size={40} />
                                    </div>
                                    <h3 className="text-4xl font-extrabold text-white heading-display">{service.title}</h3>
                                    <p className="text-xl text-slate-400 leading-relaxed">
                                        {service.description} Our senior optometrists use precision-calibrated equipment to deliver results you can trust.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                        {['Computer Testing', 'Expert Advice', 'Fast Delivery', 'Quality Frames'].map((benefit, b_idx) => (
                                            <div key={b_idx} className={`flex items-center gap-3 text-slate-300 font-bold bg-white/5 p-4 rounded-2xl border border-white/5 reveal reveal-delay-${b_idx + 1}`}>
                                                <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center shrink-0 shadow-lg shadow-primary-900/20">
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
                                            className="btn-primary w-full"
                                        >
                                            <MessageCircle size={24} className="mr-3" /> Secure Appointment <ArrowRight size={24} className="ml-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Lens Selection Guide */}
                <div className="mt-32 pt-24 border-t border-white/5">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-black text-primary-500 uppercase tracking-[0.2em] mb-4">Quality Lenses</h2>
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-white heading-display">Choose The Best Lenses</h3>
                        <p className="mt-6 text-slate-400 text-xl leading-relaxed italic">
                            &quot;Not all lenses are the same. We help you pick the right ones for your eyes.&quot;
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {lensTypes.map((lens, idx) => (
                            <div key={lens.id} className={`card-premium p-10 bg-white/[0.02] border border-white/5 transition-all duration-500 hover:bg-white/[0.05] group reveal reveal-delay-${(idx % 3) + 1}`}>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">{lens.name}</h4>
                                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{lens.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
