import React from 'react';

const Section = ({ title, children, className = "" }) => {
    return (
        <section className={`py-12 md:py-16 px-6 md:px-12 max-w-5xl mx-auto ${className}`}>
            {title && (
                <h2 className="text-3xl font-bold text-slate-100 mb-8 border-l-4 border-teal-400 pl-4">
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
};

export default Section;
