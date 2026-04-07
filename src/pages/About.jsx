import { Link } from 'react-router-dom';
import { Shield, Target, Users, Award, ArrowRight } from 'lucide-react';
import { storeHeroImg } from '../data/demoData';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
    useScrollReveal();
    return (
        <div className="bg-dark-500 min-h-screen font-sans">
            {/* Hero Section */}
            <div className="relative py-32 lg:py-48 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img src={storeHeroImg} alt="EyeMax Store" className="w-full h-full object-cover opacity-20 scale-110 blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-500/60 to-dark-500"></div>
                </div>
                {/* Blobs */}
                <div className="blur-blob w-[500px] h-[500px] bg-primary-600/20 top-[-20%] right-[-10%] z-10 animate-pulse"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <h1 className="text-sm font-black text-primary-500 uppercase tracking-[0.4em] mb-6">Our Store</h1>
                    <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 heading-display leading-tight">Best Eye Care <br /><span className="text-primary-600">For You.</span></h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed italic border-l-4 border-primary-600 pl-8 text-left">
                        &quot;For over 10 years, EyeMax has been the most trusted place for eye care in Srikakulam, bringing together expert testing and global style.&quot;
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10">
                        <h2 className="text-sm font-black text-primary-500 uppercase tracking-[0.2em]">The Mission</h2>
                        <h3 className="text-5xl font-extrabold text-white heading-display">Vision Beyond Clarity.</h3>
                        <p className="text-slate-400 text-xl leading-relaxed">
                            At EyeMax, we believe everyone deserves clear vision. Our mission is to give you the best eye testing and care. We have three stores in Srikakulam and Rajam, so expert eye care is always near you.
                        </p>
                        <p className="text-slate-400 text-xl leading-relaxed">
                            Whether you need a simple checkup, new stylish frames, or computer glasses, our friendly team is here to help you.
                        </p>
                        <div className="pt-6">
                            <Link to="/branches" className="btn-primary">
                                Find Nearest Branch <ArrowRight className="ml-3" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
                        <div className="absolute -inset-4 bg-primary-600/5 rounded-[3rem] blur-3xl -z-10"></div>
                        <div className="card-premium p-10 text-center group bg-white/[0.02] border border-white/5 reveal reveal-delay-1">
                            <div className="w-20 h-20 bg-primary-950/20 text-primary-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 border border-primary-500/20">
                                <Target size={40} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-white mb-4 heading-display">Expert Testing</h3>
                            <p className="text-slate-400 font-medium leading-relaxed">Advanced computer testing for perfect accuracy.</p>
                        </div>
                        <div className="card-premium p-10 text-center group bg-white/[0.02] border border-white/5 sm:translate-y-12 reveal reveal-delay-2">
                            <div className="w-20 h-20 bg-primary-950/20 text-primary-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 border border-primary-500/20">
                                <Award size={40} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-white mb-4 heading-display">Stylish Frames</h3>
                            <p className="text-slate-400 font-medium leading-relaxed">Top designer brands and premium glasses.</p>
                        </div>
                        <div className="card-premium p-10 text-center group bg-white/[0.02] border border-white/5 reveal reveal-delay-3">
                            <div className="w-20 h-20 bg-primary-950/20 text-primary-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 border border-primary-500/20">
                                <Users size={40} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-white mb-4 heading-display">Senior Care</h3>
                            <p className="text-slate-400 font-medium leading-relaxed">Dedicated optometrists with decades of expertise.</p>
                        </div>
                        <div className="card-premium p-10 text-center group bg-white/[0.02] border border-white/5 sm:translate-y-12 reveal reveal-delay-4">
                            <div className="w-20 h-20 bg-primary-950/20 text-primary-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 border border-primary-500/20">
                                <Shield size={40} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-white mb-4 heading-display">World Class Care</h3>
                            <p className="text-slate-400 font-medium leading-relaxed">Serving 1 Lakh+ happy customers across Andhra Pradesh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
