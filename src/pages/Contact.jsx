import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-20 bg-dark-500 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-sm font-bold text-primary-500 uppercase tracking-widest">Contact Us</h1>
                    <h2 className="mt-2 text-4xl lg:text-6xl font-extrabold text-white heading-display">How Can We Help You?</h2>
                    <p className="mt-4 text-slate-400 text-lg">Have a question about our services or frames? Our team is ready to help you on WhatsApp.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Details */}
                    <div className="space-y-10 card-premium p-12 border-white/5 bg-white/[0.02]">
                        <div>
                            <h3 className="text-3xl font-black text-white mb-8 heading-display">Contact Information</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-600/10 rounded-2xl flex items-center justify-center text-primary-500 shrink-0 border border-primary-500/20">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg heading-display">Phone & WhatsApp</h4>
                                    <p className="text-slate-400 mt-1">+91 94943 03030</p>
                                    <a href="https://wa.me/919494303030?text=Hello%20EyeMax!" className="text-sm text-primary-500 font-bold hover:underline mt-1 inline-block">Message on WhatsApp &rarr;</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-600/10 rounded-2xl flex items-center justify-center text-primary-500 shrink-0 border border-primary-500/20">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg heading-display">Email Address</h4>
                                    <p className="text-slate-400 mt-1">hello@eyemax.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-600/10 rounded-2xl flex items-center justify-center text-primary-500 shrink-0 border border-primary-500/20">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg heading-display">Main Store Location</h4>
                                    <p className="text-slate-400 mt-1 leading-relaxed">
                                        Krishnapark Junction, Srikakulam<br />
                                        Andhra Pradesh 532001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-600/10 rounded-2xl flex items-center justify-center text-primary-500 shrink-0 border border-primary-500/20">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg heading-display">Business Hours</h4>
                                    <p className="text-slate-400 mt-1">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                                    <p className="text-slate-400">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Contact Form Replacement */}
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-12 rounded-[3.5rem] shadow-2xl text-white flex flex-col items-center justify-center text-center relative overflow-hidden group">
                        <MessageCircle size={80} className="mb-8 opacity-80" />
                        <h3 className="text-3xl font-black mb-6 heading-display relative z-10 uppercase tracking-tighter">Fastest Way to Reach Us</h3>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700"></div>
                        <p className="text-primary-100 text-xl font-medium mb-12 relative z-10">
                            Skip the emails and forms. Chat directly with our experts on WhatsApp to get instant answers.
                        </p>

                        <a
                            href="https://wa.me/919494303030?text=Hello%20EyeMax,%20I%20have%20an%20inquiry."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary-600 hover:scale-105 shadow-2xl transition-all duration-300 w-full py-5 text-xl rounded-2xl font-black uppercase tracking-widest relative z-10 flex justify-center items-center gap-2"
                        >
                            <MessageCircle size={24} /> Chat Now
                        </a>
                    </div>

                </div>

                {/* Full width Map Embed */}
                <div className="mt-12 rounded-[3.5rem] overflow-hidden shadow-2xl h-[500px] border-[12px] border-white/5 relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15190.495031206198!2d83.89566145!3d18.2988118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c14fb230d7b7b%3A0xc3b8a36ef0627e7f!2sKrishna%20Park%20Junction!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="EyeMax Opticals Google Map Location"
                        className="grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 contrast-125"
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default Contact;
