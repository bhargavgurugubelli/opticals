import { MapPin, Phone } from 'lucide-react';
import { branches } from '../data/demoData';

const Branches = () => {
    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-sm font-bold text-primary-600 uppercase tracking-wide">Our Locations</h1>
                    <h2 className="mt-2 text-4xl font-extrabold text-slate-900">Visit Our Branches</h2>
                    <p className="mt-4 text-slate-600 text-lg">We have three convenient locations to serve you better. Find the branch nearest to you.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {branches.map(branch => (
                        <div key={branch.id} className="bg-white rounded-3xl overflow-hidden shadow-soft flex flex-col hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 w-full">
                                <iframe
                                    src={branch.mapLink}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title={`Map for ${branch.name}`}
                                ></iframe>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{branch.name}</h3>

                                <div className="space-y-4 mb-8 flex-grow">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-primary-600 shrink-0 mt-1" size={20} />
                                        <p className="text-slate-600">{branch.address}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="text-primary-600 shrink-0" size={20} />
                                        <a href={`tel:${branch.phone.replace(/[\s-]/g, '')}`} className="text-slate-600 hover:text-primary-600 font-medium">
                                            {branch.phone}
                                        </a>
                                    </div>
                                </div>

                                <a
                                    href={`tel:${branch.phone.replace(/[\s-]/g, '')}`}
                                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors duration-300 shadow-md hover:shadow-lg"
                                >
                                    <Phone size={20} /> Call Branch
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Branches;
