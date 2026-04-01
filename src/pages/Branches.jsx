import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { branches } from '../data/demoData';

const Branches = () => {
    return (
        <div className="py-24 bg-slate-50 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-sm font-black text-primary-600 uppercase tracking-[0.2em] mb-4">Our Presence</h1>
                    <h2 className="text-5xl font-extrabold text-slate-900 heading-display">Visit Our Boutiques</h2>
                    <p className="mt-6 text-slate-600 text-xl leading-relaxed">
                        Experience world-class eye care at any of our three uniquely designed locations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {branches.map(branch => (
                        <div key={branch.id} className="card-premium flex flex-col group bg-white border border-slate-100 overflow-hidden rounded-[3rem]">
                            <div className="h-72 w-full relative overflow-hidden group">
                                <iframe
                                    src={branch.mapLink}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title={`Map for ${branch.name}`}
                                    className="grayscale hover:grayscale-0 transition-all duration-1000 contrast-125 group-hover:scale-105"
                                ></iframe>
                                <div className="absolute inset-0 pointer-events-none border-[12px] border-white z-20"></div>
                            </div>
                            <div className="p-12 flex flex-col flex-grow">
                                <h3 className="text-3xl font-black text-slate-900 mb-8 group-hover:text-primary-600 transition-colors heading-display">{branch.name}</h3>

                                <div className="space-y-8 mb-12 flex-grow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-600 shrink-0 border border-slate-100 group-hover:bg-primary-50 transition-colors">
                                            <MapPin size={24} />
                                        </div>
                                        <p className="text-slate-500 font-medium leading-relaxed text-lg">{branch.address}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-600 shrink-0 border border-slate-100 group-hover:bg-primary-50 transition-colors">
                                            <Phone size={24} />
                                        </div>
                                        <a href={`tel:${branch.phone.replace(/[\s-]/g, '')}`} className="text-slate-900 hover:text-primary-600 font-black text-xl heading-display">
                                            {branch.phone}
                                        </a>
                                    </div>
                                </div>

                                <a
                                    href={`https://wa.me/919494303030?text=Hello%20${branch.name},%20I%20want%20to%20book%20an%20appointment.`}
                                    className="btn-primary w-full gap-4 py-5 shadow-xl shadow-primary-100 rounded-2xl"
                                >
                                    <MessageCircle size={22} /> WhatsApp Concierge
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Branches;
