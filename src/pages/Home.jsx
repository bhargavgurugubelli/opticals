import { Link } from 'react-router-dom';
import { Shield, Sparkles, ArrowRight, Eye, Glasses, ScanEye, Monitor, Sun, Smile, MapPin, MessageCircle } from 'lucide-react';
import { services, testimonials, branches, optoHeroImg, products } from '../data/demoData';

const iconMap = {
    Eye: Eye,
    Glasses: Glasses,
    ScanEye: ScanEye,
    Monitor: Monitor,
    Sun: Sun,
    Smile: Smile,
};

const Home = () => {
    return (
        <div className="w-full font-sans">
            {/* Hero Section */}
            <section className="hero-refined-gradient relative overflow-hidden py-20 lg:py-32">
                {/* Decorative Blobs */}
                <div className="blur-blob w-96 h-96 bg-primary-200 top-[-10%] right-[-5%] -z-10 animate-pulse"></div>
                <div className="blur-blob w-[500px] h-[500px] bg-indigo-100 bottom-[-20%] left-[-10%] -z-10"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10 z-10">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/50 backdrop-blur-md border border-primary-100 text-primary-700 font-bold text-sm shadow-sm">
                            <Sparkles size={18} className="text-primary-500 animate-pulse" /> 
                            <span>Premium Optical Experience in Srikakulam</span>
                        </div>
                        
                        <h1 className="text-6xl lg:text-8xl font-extrabold text-slate-900 heading-display">
                            Precision <br />
                            <span className="text-gradient">For Your Eyes.</span>
                        </h1>
                        
                        <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
                            Experience the perfect blend of clinical excellence and high-fashion eyewear. We bring world-class eye care to your doorstep with cutting-edge technology.
                        </p>
                        
                        <div className="flex flex-wrap gap-6 pt-4">
                            <a
                                href="https://wa.me/919494303030?text=Hello%20EyeMax,%20I%20want%20to%20book%20an%20Appointment!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary shadow-xl shadow-primary-200/50"
                            >
                                <MessageCircle size={22} className="mr-2" /> Book Appointment
                            </a>
                            <Link to="/products" className="btn-secondary">
                                Explore Collection
                            </Link>
                        </div>

                        <div className="pt-12 flex flex-wrap items-center gap-12">
                            <div className="space-y-2">
                                <h4 className="text-4xl font-extrabold text-slate-900">03</h4>
                                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Luxury Spaced Branches</p>
                            </div>
                            <div className="w-px h-16 bg-slate-200 hidden sm:block"></div>
                            <div className="space-y-2">
                                <h4 className="text-4xl font-extrabold text-slate-900 text-gradient">10k+</h4>
                                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Trusted Patients</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary-400 to-indigo-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white/50 backdrop-blur-sm animate-float">
                            <img
                                src={optoHeroImg}
                                alt="Professional optometrist"
                                className="w-full h-full object-cover md:aspect-[4/5] lg:aspect-square transform group-hover:scale-105 transition-transform duration-[2000ms]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Products Preview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.2em] mb-4">Curated Style</h2>
                            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 heading-display">The Signature Collection</h3>
                        </div>
                        <Link to="/products" className="group flex items-center gap-3 text-slate-900 font-bold text-lg hover:text-primary-600 transition-colors">
                            View All Styles <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {products.sort(() => 0.5 - Math.random()).slice(0, 4).map((product) => (
                            <div key={product.id} className="card-premium group relative">
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.15em] text-slate-900 shadow-sm border border-slate-100">
                                        {product.category || 'Luxury'}
                                    </span>
                                </div>
                                <div className="bg-slate-50/50 p-12 rounded-[2rem] m-3 overflow-hidden aspect-[4/5] flex items-center justify-center relative transition-colors duration-500 group-hover:bg-primary-50/30">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 ease-out z-10 filter drop-shadow-xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/5 to-transparent"></div>
                                </div>
                                <div className="p-8 pt-2">
                                    <h4 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight group-hover:text-primary-600 transition-colors">{product.name}</h4>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">In Stock</span>
                                        </div>
                                        <div className="text-primary-600 font-bold text-xs uppercase tracking-tighter">Premium Grade</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.2em] mb-4">Our Excellence</h2>
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 heading-display">Bespoke Eye Care</h3>
                        <p className="mt-6 text-slate-600 text-xl leading-relaxed italic">
                            &quot;Crafting crystal clear vision since 2010 with precision and passion.&quot;
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.slice(0, 3).map((service) => {
                            const IconComponent = iconMap[service.icon] || Shield;
                            return (
                                <div key={service.id} className="card-premium p-10 flex flex-col group hover:bg-slate-900 transition-colors duration-500">
                                    <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                                        <IconComponent size={32} />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors">{service.title}</h4>
                                    <p className="text-slate-600 mb-8 flex-grow leading-relaxed group-hover:text-slate-400 transition-colors">{service.description}</p>
                                    <div className="w-12 h-1 bg-primary-200 group-hover:w-full transition-all duration-500"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Branch Locations Preview */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-black text-primary-400 uppercase tracking-[0.3em] mb-4">Visit Us</h2>
                        <h3 className="text-4xl lg:text-6xl font-extrabold text-white heading-display">Luxury Boutiques</h3>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {branches.map((branch) => (
                            <div key={branch.id} className="relative group p-10 rounded-[3rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.08] hover:border-primary-500/30 transition-all duration-700 overflow-hidden">
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-600/10 rounded-full blur-3xl group-hover:bg-primary-600/20 transition-colors duration-700"></div>
                                
                                <h4 className="text-3xl font-black text-white mb-6 group-hover:text-primary-400 transition-colors heading-display">{branch.name}</h4>
                                <div className="space-y-6 mb-12 text-slate-400 text-lg leading-relaxed relative z-10">
                                    <p className="flex items-start gap-4">
                                        <MapPin className="text-primary-500 shrink-0 mt-1" size={24} />
                                        <span className="font-medium">{branch.address}</span>
                                    </p>
                                </div>
                                
                                <a
                                    href={branch.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 w-full py-5 rounded-2xl bg-white text-slate-900 font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-primary-500 hover:text-white hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-all duration-500"
                                >
                                    Get Directions <ArrowRight size={18} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
                    <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.3em] mb-4">Patient Experiences</h2>
                    <h3 className="text-4xl lg:text-6xl font-black text-slate-900 heading-display">Visions of Trust</h3>
                </div>

                <div className="marquee-container pause-on-hover relative">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                    
                    <div className="marquee-content">
                        {[...testimonials, ...testimonials].map((review, i) => (
                            <div key={`${review.id}-${i}`} className="w-[450px] shrink-0 card-premium p-10 bg-slate-50/50 border border-slate-100 flex flex-col justify-between hover:bg-white transition-all duration-500">
                                <div>
                                    <div className="text-yellow-400 flex gap-1 mb-8">
                                        {[...Array(5)].map((_, star_idx) => (
                                            <svg key={star_idx} className={`w-5 h-5 ${star_idx < review.rating ? 'fill-current' : 'text-slate-300'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-slate-600 text-xl leading-relaxed italic mb-10">&quot;{review.text}&quot;</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-slate-200/50 pt-8 mt-4">
                                    <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center text-white font-black text-xl heading-display shadow-lg shadow-primary-200">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="text-left">
                                        <h5 className="font-extrabold text-slate-900 text-lg">{review.name}</h5>
                                        <p className="text-xs font-black text-primary-500 uppercase tracking-widest">Verified Patient</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
