import { Link } from 'react-router-dom';
import { Shield, Target, Users, Award } from 'lucide-react';
import { storeHeroImg } from '../data/demoData';

const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={storeHeroImg} alt="EyeMax Store" className="w-full h-full object-cover opacity-20" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl font-extrabold text-slate-900 mb-6">About EyeMax Optical</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Providing the community of Srikakulam with exceptional eye care, premium eyewear, and unparalleled service for over a decade.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision & Mission</h2>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            At EyeMax, we believe that clear vision is a fundamental right. Our mission is to combine state-of-the-art optical science with personalized patient care. We proudly serve our community across three branches in Srikakulam and Rajam, ensuring high-quality eye care is always within your reach.
                        </p>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Whether you need a routine checkup, stylish new frames, or specialized lenses, our team of dedicated professionals is here to guide you every step of the way.
                        </p>
                        <Link to="/branches" className="btn-primary inline-flex">
                            Find Nearest Branch
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-soft text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                                <Target size={32} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-xl mb-2">Precision</h3>
                            <p className="text-slate-600 text-sm">Advanced computerized testing for accurate results.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-soft text-center transform hover:-translate-y-2 transition-transform duration-300 mt-8">
                            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                                <Award size={32} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-xl mb-2">Quality</h3>
                            <p className="text-slate-600 text-sm">Premium frames and durable lenses from top brands.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-soft text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                                <Users size={32} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-xl mb-2">Expert Team</h3>
                            <p className="text-slate-600 text-sm">Certified optometrists and friendly staff.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-soft text-center transform hover:-translate-y-2 transition-transform duration-300 mt-8">
                            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                                <Shield size={32} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-xl mb-2">Trust</h3>
                            <p className="text-slate-600 text-sm">Thousands of happy customers across 3 branches.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
