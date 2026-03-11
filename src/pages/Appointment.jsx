import { Clock, MapPin, MessageCircle } from 'lucide-react';
import { branches } from '../data/demoData';

const Appointment = () => {
    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-sm font-bold text-primary-600 uppercase tracking-wide">Take Action</h1>
                    <h2 className="mt-2 text-4xl font-extrabold text-slate-900">Book Your Eye Test</h2>
                    <p className="mt-4 text-slate-600 text-lg">Schedule a comprehensive vision check via WhatsApp in seconds.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Time & Info Box */}
                    <div className="bg-white rounded-3xl p-10 shadow-soft">
                        <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Available Appointment Slots</h3>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <span className="font-semibold text-slate-700">Morning Slot</span>
                                <span className="text-primary-600 font-bold">10:00 AM - 1:00 PM</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <span className="font-semibold text-slate-700">Evening Slot</span>
                                <span className="text-primary-600 font-bold">4:00 PM - 8:00 PM</span>
                            </div>
                            <div className="pt-4 text-slate-600">
                                <p className="mb-2"><strong>Note:</strong> We are closed on Sundays.</p>
                                <p>Please bring any previous prescriptions when visiting the clinic.</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Box */}
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 shadow-2xl text-white flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-6">Fast & Easy Booking</h3>
                        <p className="text-primary-100 text-lg mb-10 leading-relaxed">
                            Skip the forms! Just click the button below to message us directly on WhatsApp and secure your slot instantly.
                        </p>

                        <div className="space-y-8">
                            <a
                                href="https://wa.me/919876543210?text=Hello%20EyeMax,%20I%20want%20to%20book%20an%20eye%20test%20appointment."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg transform hover:-translate-y-1 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 transition-all duration-300"
                            >
                                <MessageCircle size={28} /> Book Appointment on WhatsApp
                            </a>

                            <div className="border-t border-white/20 pt-8">
                                <p className="text-sm text-primary-100 mb-4 uppercase tracking-wider font-semibold">Available at Branches:</p>
                                <ul className="space-y-3">
                                    {branches.map(b => (
                                        <li key={b.id} className="flex items-center gap-2">
                                            <MapPin size={16} className="text-primary-200" />
                                            <span>{b.name}</span>
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
