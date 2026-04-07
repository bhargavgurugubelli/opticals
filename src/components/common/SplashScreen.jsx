import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        const removeTimer = setTimeout(() => {
            setShouldRender(false);
        }, 3500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!shouldRender) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative flex flex-col items-center">
                {/* stylized Eye Icon / Logo */}
                <div className="relative w-32 h-32 mb-8 group">
                    <div className="absolute inset-0 bg-primary-600 rounded-full blur-3xl opacity-20 anim-pulse-ring"></div>
                    <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
                        <path
                            d="M10 50 Q50 10 90 50 Q50 90 10 50 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary-500 anim-draw"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="15"
                            fill="currentColor"
                            className="text-primary-600"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="6"
                            fill="white"
                        />
                    </svg>
                </div>

                <div className="overflow-hidden text-center">
                    <h1 className="text-5xl font-black tracking-[0.3em] text-white heading-display anim-reveal uppercase">
                        EYE<span className="text-primary-600">MAX</span>
                    </h1>
                    <div className="h-0.5 w-0 bg-primary-600 mx-auto mt-4 transition-all duration-[2000ms] ease-out delay-500 group-hover:w-full" style={{ width: isVisible ? '100%' : '0%' }}></div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.5em] mt-6 opacity-0 animate-[fade-in_1s_ease-out_forwards_1.5s]">
                        Premium Optical Care
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
