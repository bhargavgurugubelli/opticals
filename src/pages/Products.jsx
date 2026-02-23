import React, { useState } from 'react';
import { products } from '../data/demoData';
import { Filter, Search, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Men', 'Women', 'Unisex', 'Kids'];

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
                    <p className="mt-4 text-slate-600 text-lg">Browse our wide selection of stylish and durable eyewear for every face shape.</p>
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
                        <div key={product.id} className="card group overflow-hidden bg-white">
                            <div className="relative aspect-square overflow-hidden bg-slate-100 p-8">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary-600 shadow-sm">
                                    ${product.price}
                                </div>
                                <div className="absolute top-4 left-4 bg-slate-900/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700 uppercase tracking-wider">
                                    {product.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                                <div className="flex justify-between items-center mt-6">
                                    <Link to="/appointment" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                                        Try in Store
                                    </Link>
                                    <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary-600 hover:text-white transition-colors duration-300">
                                        <ShoppingBag size={18} />
                                    </button>
                                </div>
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
