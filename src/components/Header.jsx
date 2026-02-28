import React from 'react';
import { Mail, Phone, MapPin, Github, Send } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400 tracking-tight">
                        SAWASDICHAI AMORNPRADUBKOOL
                    </h1>
                    <p className="text-slate-400 mt-2 text-lg font-medium">Information Technology</p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4 text-sm text-slate-300">
                        <div className="flex items-center gap-1.5">
                            <Phone className="w-4 h-4 text-teal-400" />
                            <span>062-749-9966</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Mail className="w-4 h-4 text-teal-400" />
                            <span>sawasdichai.amor@bumail.net</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-teal-400" />
                            <span>Bangkok, Thailand</span>
                        </div>
                    </div>
                </div>

                {/* <div className="flex gap-4">

                    <a
                        href="https://github.com/sawasdichai123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-slate-700/50 transform hover:-translate-y-0.5"
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>
                </div> */}
            </div>
        </header>
    );
};

export default Header;
