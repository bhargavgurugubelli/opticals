import { useState } from 'react';
import { products } from '../data/demoData';
import { Search } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const categories = ['All', 'Eyeglasses', 'Sunglasses', 'Kids Frames', 'Contact Lenses'];

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    useScrollReveal();

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="py-24 bg-dark-500 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h1 className="text-sm font-black text-primary-500 uppercase tracking-[0.2em] mb-4">Our Gallery</h1>
                    <h2 className="text-5xl font-extrabold text-white heading-display">Best Selling Glasses</h2>
                    <p className="mt-6 text-slate-400 text-xl leading-relaxed italic">
                        Explore our world-class curation of designer frames and high-performance lenses.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16 px-8 py-10 bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[3rem] shadow-2xl">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3.5 rounded-2xl font-bold transition-all duration-500 text-sm uppercase tracking-wider ${activeCategory === cat
                                    ? 'bg-primary-600 text-white shadow-[0_0_20px_rgba(225,29,72,0.3)] scale-105'
                                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-96 group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={22} />
                        <input
                            type="text"
                            placeholder="Search our catalog..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-transparent shadow-2xl focus:ring-0 focus:border-primary-600/50 transition-all bg-white/5 text-white font-medium placeholder:text-slate-500"
                        />
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {filteredProducts.map((product, idx) => (
                        <div key={product.id} className={`card-premium group reveal reveal-delay-${(idx % 4) + 1} hover-3d transition-transform duration-500`}>
                            <div className="relative aspect-square overflow-hidden bg-white/5 p-12 m-3 rounded-2xl group-hover:bg-primary-600/10 transition-colors duration-500">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out z-10 filter drop-shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-8 pt-2 text-center">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{product.name}</h3>
                                <p className="text-primary-500 font-black text-sm uppercase tracking-widest">In Store Preview</p>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-slate-700">No frames found matching your search.</h3>
                        <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-4 text-primary-600 font-medium hover:underline">
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
