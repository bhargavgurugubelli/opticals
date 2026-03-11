import { useEffect } from 'react';
import { ShieldCheck, ArrowRight, Eye } from 'lucide-react';
import { brands } from '../data/brandsData';
import { whatsappNumber } from '../data/demoData';

const Brands = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Eye Max Opticals, I want to book an eye test appointment or inquire about your brands.")}`;

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-primary-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
                        Trusted Eyewear Brands
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Eye Max Opticals offers high-quality frames and lenses from trusted global eyewear brands.
                    </p>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4 font-display">
                        Eyewear Brands Available at Eye Max Opticals
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Eye Max Opticals offers eyewear from trusted brands like Ray-Ban, Fastrack, Vogue, Titan and Essilor lenses. Visit our store in Srikakulam or Rajam to explore the latest collections.
                    </p>
                </div>
            </section>

            {/* Essilor Expert Highlight Section */}
            <section className="py-6 pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/50 flex flex-col md:flex-row items-center gap-8 justify-between">
                        <div className="flex-1 space-y-4 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-2">
                                <ShieldCheck size={18} />
                                <span>Premium Partner</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 font-display">
                                Authorized Essilor Expert Store
                            </h2>
                            <p className="text-lg text-slate-700">
                                Eye Max Opticals is an Essilor Expert partner providing premium Essilor lenses for better vision and eye care.
                            </p>
                        </div>
                        <div className="w-full md:w-auto flex justify-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            {/* Text based logo representation */}
                            <div className="text-2xl font-bold text-blue-900 tracking-wider">
                                <span className="text-blue-600">Essilor</span> Expert
                            </div>
                            <img src="" alt="Essilor Expert Partner at Eye Max Opticals" className="hidden" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands Grid Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {brands.map((brand) => (
                            <div 
                                key={brand.id}
                                className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center group"
                            >
                                <div className="h-24 w-full flex items-center justify-center mb-6">
                                    {brand.logo ? (
                                        <img 
                                            src={brand.logo} 
                                            alt={`${brand.name} eyewear available at Eye Max Opticals Srikakulam`} 
                                            className="max-h-full max-w-[80%] object-contain"
                                        />
                                    ) : (
                                        <span className="text-3xl font-bold text-slate-300 group-hover:text-primary-600 transition-colors uppercase tracking-widest font-display">
                                            {brand.name}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{brand.name}</h3>
                                <p className="text-slate-600">
                                    {brand.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-primary-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold font-display">
                        Visit Our Store to Explore More Brands
                    </h2>
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                        Discover the latest eyewear collections at Eye Max Opticals.
                    </p>
                    <div className="pt-4">
                        <a 
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary-600 hover:bg-slate-50 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                        >
                            <Eye size={24} />
                            Book Eye Test Appointment
                            <ArrowRight size={20} className="ml-1" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brands;
