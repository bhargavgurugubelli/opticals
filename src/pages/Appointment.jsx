import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, Eye } from 'lucide-react';

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate backend saving
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', email: '', date: '', time: '', message: '' });
        }, 4000); // Reset form after 4 seconds
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-sm font-bold text-primary-600 uppercase tracking-wide">Take Action</h1>
                    <h2 className="mt-2 text-4xl font-extrabold text-slate-900">Book Your Eye Test</h2>
                    <p className="mt-4 text-slate-600 text-lg">Schedule a comprehensive vision check with our certified optometrists.</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl">

                    {/* Form Info Panel */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-primary-600 to-primary-800 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Eye size={160} />
                        </div>

                        <div className="relative z-10 space-y-8">
                            <h3 className="text-3xl font-bold mb-4">Why Book Online?</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <Clock size={20} className="text-white" />
                                    </span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Avoid Wait Times</h4>
                                        <p className="text-primary-100 text-sm leading-relaxed">Skip the queue by scheduling your exact visit time.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <Calendar size={20} className="text-white" />
                                    </span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Flexible Scheduling</h4>
                                        <p className="text-primary-100 text-sm leading-relaxed">Pick a date and time that fits seamlessly into your busy week.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <CheckCircle size={20} className="text-white" />
                                    </span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Confirm Instantly</h4>
                                        <p className="text-primary-100 text-sm leading-relaxed">Receive instant confirmation on your phone.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="relative z-10 mt-12 pt-8 border-t border-white/20">
                            <p className="text-sm text-primary-100 mb-2">Need to restructure an existing appointment?</p>
                            <a href="tel:+919123456789" className="text-white font-bold text-lg flex items-center gap-2 hover:underline">
                                Call +91 91234 56789
                            </a>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="lg:col-span-3 p-12">

                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="text-green-500" size={48} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Booking Confirmed!</h3>
                                    <p className="text-lg text-slate-600 max-w-sm">
                                        Thank you, <span className="font-semibold text-primary-600">{formData.name}</span>. We've received your request for {formData.date} at {formData.time}. We will reach out shortly to confirm.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Enter Your Details</h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date <span className="text-red-500">*</span></label>
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="input-field"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time <span className="text-red-500">*</span></label>
                                        <select
                                            name="time"
                                            required
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="input-field"
                                        >
                                            <option value="">Select a time</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="11:30 AM">11:30 AM</option>
                                            <option value="01:00 PM">01:00 PM</option>
                                            <option value="03:00 PM">03:00 PM</option>
                                            <option value="05:30 PM">05:30 PM</option>
                                            <option value="07:00 PM">07:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Notes (Optional)</label>
                                    <textarea
                                        name="message"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="input-field resize-none"
                                        placeholder="Any specific symptoms or questions?"
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full btn-primary py-4 text-lg">
                                    Confirm Appointment
                                </button>
                            </form>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Appointment;
