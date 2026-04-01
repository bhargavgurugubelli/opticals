import { useEffect } from 'react';
import { ShieldCheck, ArrowRight, Eye, MessageCircle } from 'lucide-react';
import { brands } from '../data/brandsData';

const Brands = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 bg-slate-50 min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-white">
                <div className="blur-blob w-[600px] h-[600px] bg-primary-100/50 top-[-20%] left-[-10%] z-0 text-white"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-sm font-black text-primary-600 uppercase tracking-[0.4em] mb-6">Partners in Vision</h1>
                    <h2 className="text-6xl font-black text-slate-900 mb-10 heading-display leading-tight">Global Labels. <br />Elite Standards.</h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed italic">
                        EyeMax Opticals curate authentic collections from the world&apos;s most prestigious eyewear designers.
                    </p>
                </div>
            </section>

            {/* Brands Grid Section */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {brands.map((brand) => (
                            <div 
                                key={brand.id}
                                className="card-premium p-12 flex flex-col items-center text-center group bg-white border border-slate-100 hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="h-28 w-full flex items-center justify-center mb-10">
                                    {brand.logo ? (
                                        <img 
                                            src={brand.logo} 
                                            alt={brand.name} 
                                            className="max-h-full max-w-[90%] object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <span className="text-4xl font-extrabold text-slate-300 group-hover:text-primary-600 transition-colors uppercase tracking-[0.2em] heading-display">
                                            {brand.name}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 heading-display">{brand.name}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed italic">
                                    &quot;{brand.description || "Unparalleled quality and timeless design since inception."}&quot;
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Highlight */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-card p-16 rounded-[4rem] bg-gradient-to-br from-indigo-900 to-slate-950 text-white relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-500/20 backdrop-blur-md border border-primary-500/30 text-primary-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                    <ShieldCheck size={16} /> Premium Partner
                                </div>
                                <h2 className="text-5xl font-black heading-display leading-tight">
                                    Authorized <br /><span className="text-primary-500">Essilor Expert</span> Boutique
                                </h2>
                                <p className="text-xl text-slate-400 leading-relaxed max-w-md">
                                    As official Essilor Expert partners, we provide cutting-edge lens technology integrated with professional diagnostics.
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl p-16 rounded-[3rem] border border-white/10 flex flex-col items-center group-hover:bg-white/10 transition-colors">
                                <div className="text-4xl font-black text-white tracking-[0.3em] uppercase heading-display flex flex-col items-center gap-4 text-center">
                                    <span className="text-primary-500 leading-tight">ESSILOR</span>
                                    <span className="text-xl tracking-[0.5em] text-slate-400 font-extralight leading-none">EXPERT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-16 rounded-[3rem] shadow-soft border border-slate-100">
                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 heading-display mb-10 leading-tight">
                        Experience the <br /><span className="text-gradient">Whole Collection.</span>
                    </h2>
                    <p className="text-xl text-slate-500 mb-12 italic">
                        Visit our boutiques to try on the world&apos;s leading eyewear styles in person.
                    </p>
                    <a 
                        href={`https://wa.me/919494303030?text=Hello%20EyeMax,%20I%20want%20to%20inquire%20about%20your%20luxury%20brands.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex scale-110"
                    >
                        <MessageCircle size={24} className="mr-3" />
                        Inquire via Concierge
                        <ArrowRight size={24} className="ml-3" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Brands;
