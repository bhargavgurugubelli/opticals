import { Link } from 'react-router-dom';
import { Shield, Target, Users, Award, ArrowRight } from 'lucide-react';
import { storeHeroImg } from '../data/demoData';

const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* Hero Section */}
            <div className="relative py-32 lg:py-48 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img src={storeHeroImg} alt="EyeMax Store" className="w-full h-full object-cover opacity-30 scale-110 blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-950/90"></div>
                </div>
                {/* Blobs */}
                <div className="blur-blob w-[500px] h-[500px] bg-primary-600/20 top-[-20%] right-[-10%] z-10 animate-pulse"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <h1 className="text-sm font-black text-primary-400 uppercase tracking-[0.4em] mb-6">Our Legacy</h1>
                    <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 heading-display leading-tight">Elite Optical <br /><span className="text-primary-500">Excellence.</span></h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed italic border-l-4 border-primary-500 pl-8 text-left">
                        &quot;For over a decade, EyeMax has been the cornerstone of precision vision in Srikakulam, blending clinical science with the world&apos;s most prestigious eyewear fashions.&quot;
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10">
                        <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.2em]">The Mission</h2>
                        <h3 className="text-5xl font-extrabold text-slate-900 heading-display">Vision Beyond Clarity.</h3>
                        <p className="text-slate-600 text-xl leading-relaxed">
                            At EyeMax, we believe that clear vision is a fundamental right. Our mission is to combine state-of-the-art optical science with personalized patient care. We proudly serve our community across three branches in Srikakulam and Rajam, ensuring high-quality eye care is always within your reach.
                        </p>
                        <p className="text-slate-600 text-xl leading-relaxed">
                            Whether you need a routine checkup, stylish new frames, or specialized lenses, our team of dedicated professionals is here to guide you every step of the way.
                        </p>
                        <div className="pt-6">
                            <Link to="/branches" className="btn-primary">
                                Find Nearest Branch <ArrowRight className="ml-3" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
                        <div className="absolute -inset-4 bg-primary-100/50 rounded-[3rem] blur-3xl -z-10"></div>
                        <div className="card-premium p-10 text-center group bg-white border border-slate-100">
                            <div className="w-20 h-20 bg-primary-50 rounded-3xl flex items-center justify-center text-primary-600 mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500">
                                <Target size={40} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 heading-display">Clinical Precision</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Advanced digital testing for microscopic accuracy.</p>
                        </div>
                        <div className="card-premium p-10 text-center group bg-white border border-slate-100 sm:translate-y-12">
                            <div className="w-20 h-20 bg-primary-50 rounded-3xl flex items-center justify-center text-primary-600 mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500">
                                <Award size={40} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 heading-display">Boutique Luxury</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Global designer labels and premium optics.</p>
                        </div>
                        <div className="card-premium p-10 text-center group bg-white border border-slate-100">
                            <div className="w-20 h-20 bg-primary-50 rounded-3xl flex items-center justify-center text-primary-600 mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500">
                                <Users size={40} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 heading-display">Senior Care</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Dedicated optometrists with decades of expertise.</p>
                        </div>
                        <div className="card-premium p-10 text-center group bg-white border border-slate-100 sm:translate-y-12">
                            <div className="w-20 h-20 bg-primary-50 rounded-3xl flex items-center justify-center text-primary-600 mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500">
                                <Shield size={40} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 heading-display">Global Standards</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Serving 100k+ happy clients across Andhra Pradesh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
