import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-sm font-bold text-primary-600 uppercase tracking-wide">Get in touch</h1>
                    <h2 className="mt-2 text-4xl font-extrabold text-slate-900">We&apos;d Love to Hear From You</h2>
                    <p className="mt-4 text-slate-600 text-lg">Whether you have a question about our services, products, or your prescription, our team is ready to answer all your questions via WhatsApp.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Details */}
                    <div className="space-y-10 bg-white p-12 rounded-3xl shadow-soft">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Phone & WhatsApp</h4>
                                    <p className="text-slate-600 mt-1">+91 98765 43210</p>
                                    <a href="https://wa.me/919876543210?text=Hello%20EyeMax!" className="text-sm text-green-600 font-bold hover:underline mt-1 inline-block">Message on WhatsApp &rarr;</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Email Address</h4>
                                    <p className="text-slate-600 mt-1">support@eyemaxopticals.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Main Store Location</h4>
                                    <p className="text-slate-600 mt-1 leading-relaxed">
                                        123 Main Road, Srikakulam CBD<br />
                                        Andhra Pradesh 532001
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

                    {/* Quick Contact Form Replacement */}
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-12 rounded-3xl shadow-soft text-white flex flex-col items-center justify-center text-center">
                        <MessageCircle size={80} className="mb-8 opacity-80" />
                        <h3 className="text-3xl font-bold mb-6">Fastest Way to Reach Us</h3>
                        <p className="text-green-50 text-xl font-medium mb-12">
                            Skip the emails and forms. Chat directly with our experts on WhatsApp to get instant answers.
                        </p>

                        <a
                            href="https://wa.me/919876543210?text=Hello%20EyeMax,%20I%20have%20an%20inquiry."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-green-600 hover:scale-105 shadow-xl transition-all duration-300 w-full py-5 text-xl rounded-2xl font-bold flex justify-center items-center gap-2"
                        >
                            <MessageCircle size={24} /> Chat Now
                        </a>
                    </div>

                </div>

                {/* Full width Map Embed */}
                <div className="mt-12 rounded-3xl overflow-hidden shadow-soft h-[400px] border-4 border-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15190.495031206198!2d83.89966145!3d18.2988118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c130000000001%3A0x0!2sSrikakulam!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
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
