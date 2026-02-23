import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-sm font-bold text-primary-600 uppercase tracking-wide">Get in touch</h1>
                    <h2 className="mt-2 text-4xl font-extrabold text-slate-900">We'd Love to Hear From You</h2>
                    <p className="mt-4 text-slate-600 text-lg">Whether you have a question about our services, products, or your prescription, our team is ready to answer all your questions.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Details */}
                    <div className="space-y-10 bg-white p-12 rounded-3xl shadow-soft">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h3>
                            <p className="text-slate-600 mb-8 max-w-sm">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Phone & WhatsApp</h4>
                                    <p className="text-slate-600 mt-1">+91 91234 56789</p>
                                    <a href="https://wa.me/919123456789" className="text-sm text-green-600 font-bold hover:underline mt-1 inline-block">Message on WhatsApp &rarr;</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Email Address</h4>
                                    <p className="text-slate-600 mt-1">info@eyemaxopticals.com</p>
                                    <p className="text-slate-600">support@eyemaxopticals.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Store Location</h4>
                                    <p className="text-slate-600 mt-1 leading-relaxed">
                                        123 Main Road, City Center<br />
                                        Near Metro Station, Your City 40001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Business Hours</h4>
                                    <p className="text-slate-600 mt-1">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                                    <p className="text-slate-600">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Contact Form */}
                    <div className="bg-white p-12 rounded-3xl shadow-soft">
                        <h3 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h3>

                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message Sent Successfully!"); e.target.reset(); }}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="input-field" placeholder="John" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="input-field" placeholder="Doe" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                                <input type="email" className="input-field" placeholder="john@example.com" required />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                                <input type="text" className="input-field" placeholder="How can we help?" required />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                <textarea rows="5" className="input-field resize-none" placeholder="Write your message here..." required></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary py-4 text-lg">
                                <Send size={20} className="mr-2" /> Send Message
                            </button>
                        </form>
                    </div>

                </div>

                {/* Full width Map Embed */}
                <div className="mt-12 rounded-3xl overflow-hidden shadow-soft h-[400px] border-4 border-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.016335198424!2d72.8364273!3d19.106969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzI1LjEiTiA3MsKwNTAnMTEuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="EyeMax Opticals Google Map Location"
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default Contact;
