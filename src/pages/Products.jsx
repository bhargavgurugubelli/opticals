import { useState } from 'react';
import { products } from '../data/demoData';
import { Search } from 'lucide-react';

const categories = ['All', 'Eyeglasses', 'Sunglasses', 'Kids Frames', 'Contact Lenses'];

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="py-24 bg-slate-50 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h1 className="text-sm font-black text-primary-600 uppercase tracking-[0.2em] mb-4">Our Gallery</h1>
                    <h2 className="text-5xl font-extrabold text-slate-900 heading-display">The Signature Collection</h2>
                    <p className="mt-6 text-slate-600 text-xl leading-relaxed italic">
                        Explore our world-class curation of designer frames and high-performance lenses.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16 px-6 py-8 glass-card rounded-[2.5rem] border-slate-200/50">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3.5 rounded-2xl font-bold transition-all duration-500 text-sm uppercase tracking-wider ${activeCategory === cat
                                    ? 'bg-primary-600 text-white shadow-xl shadow-primary-200 scale-105'
                                    : 'bg-white text-slate-500 hover:bg-slate-50 hover:text-primary-600 border border-slate-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-96 group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-600 transition-colors" size={22} />
                        <input
                            type="text"
                            placeholder="Search our catalog..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-transparent shadow-soft focus:ring-0 focus:border-primary-100 transition-all bg-white text-slate-900 font-medium placeholder:text-slate-400"
                        />
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="card-premium group">
                            <div className="relative aspect-square overflow-hidden bg-slate-50 p-12 m-3 rounded-2xl">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out z-10"
                                />
                                <div className="absolute inset-0 bg-primary-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-8 pt-2 text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>
                                <p className="text-primary-600 font-black text-sm uppercase tracking-widest">In Store Preview</p>
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
