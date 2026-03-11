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
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-sm font-bold text-primary-600 uppercase tracking-wide">Our Collection</h1>
                    <h2 className="mt-2 text-4xl font-extrabold text-slate-900">Discover Your Perfect Frame</h2>
                    <p className="mt-4 text-slate-600 text-lg">Explore our stylish eyewear collection. Visit our store to try them in person.</p>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search frames..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full border-none shadow-sm focus:ring-2 focus:ring-primary-500 bg-white text-slate-900"
                        />
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="card group overflow-hidden bg-white hover:shadow-xl transition-all duration-300">
                            <div className="relative aspect-square overflow-hidden bg-slate-100 p-8">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                                <div className="text-slate-500 italic mt-2">Available in store</div>
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
