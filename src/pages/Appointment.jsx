import { Clock, MapPin, MessageCircle } from 'lucide-react';
import { branches } from '../data/demoData';

const Appointment = () => {
    return (
        <div className="py-20 bg-dark-500 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-sm font-black text-primary-500 uppercase tracking-[0.2em] mb-4">Take Action</h1>
                    <h2 className="mt-2 text-4xl lg:text-6xl font-extrabold text-white heading-display">Book Your Eye Test</h2>
                    <p className="mt-4 text-slate-400 text-lg">Schedule a comprehensive vision check via WhatsApp in seconds.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Time & Info Box */}
                    <div className="card-premium p-10 border-white/5 bg-white/[0.02]">
                        <div className="w-16 h-16 bg-primary-600/10 rounded-2xl flex items-center justify-center text-primary-500 mb-8 border border-primary-500/20">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 heading-display">Available Appointment Slots</h3>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10">
                                <span className="font-semibold text-slate-300">Morning Slot</span>
                                <span className="text-primary-500 font-bold">10:00 AM - 1:00 PM</span>
                            </div>
                            <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10">
                                <span className="font-semibold text-slate-300">Evening Slot</span>
                                <span className="text-primary-500 font-bold">4:00 PM - 8:00 PM</span>
                            </div>
                            <div className="pt-4 text-slate-400">
                                <p className="mb-2 uppercase text-[10px] tracking-widest font-black text-primary-600">Please Note</p>
                                <p className="text-sm italic leading-relaxed">We remain closed on Sundays. Please carry your previous prescriptions for a faster consultation.</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Box */}
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-[3rem] p-12 shadow-2xl text-white flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700"></div>
                        <h3 className="text-3xl font-black mb-6 heading-display relative z-10 uppercase tracking-tighter">Fast & Easy Booking</h3>
                        <p className="text-primary-100 text-lg mb-10 leading-relaxed relative z-10">
                            Skip the forms! Just click the button below to message us directly on WhatsApp and secure your slot instantly.
                        </p>

                        <div className="space-y-8 relative z-10">
                            <a
                                href="https://wa.me/919494303030?text=Hello%20EyeMax,%20I%20want%20to%20book%20an%20eye%20test%20appointment."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-white text-primary-600 hover:scale-105 shadow-2xl py-5 rounded-2xl text-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300"
                            >
                                <MessageCircle size={28} /> Book Appointment
                            </a>

                            <div className="border-t border-white/20 pt-8">
                                <p className="text-xs text-primary-100 mb-6 uppercase tracking-[0.2em] font-black opacity-60">Available at Branches</p>
                                <ul className="space-y-4">
                                    {branches.map(b => (
                                        <li key={b.id} className="flex items-center gap-4 text-white hover:text-primary-200 transition-colors cursor-default">
                                            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                                <MapPin size={14} className="text-white" />
                                            </div>
                                            <span className="font-bold tracking-wide">{b.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Appointment;
