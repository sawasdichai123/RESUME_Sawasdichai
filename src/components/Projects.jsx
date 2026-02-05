import React from 'react';
import Section from './Section';
import { Code, ExternalLink, Database, Smartphone } from 'lucide-react';

const Projects = () => {
    return (
        <Section title="Featured Projects">
            <div className="grid grid-cols-1 gap-6">
                {/* Project Card */}
                <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
                    <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                                    Stock Management & POS System
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-full border border-indigo-500/20 flex items-center gap-1">
                                        <Smartphone size={12} /> .NET 8 (MAUI)
                                    </span>
                                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20 flex items-center gap-1">
                                        <Database size={12} /> SQLite
                                    </span>
                                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full border border-green-500/20">
                                        Android
                                    </span>
                                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full border border-purple-500/20">
                                        C#
                                    </span>
                                </div>
                            </div>

                            <a
                                href="https://github.com/sawasdichai123/POS_Application-.net8-"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-200 px-4 py-2 rounded-lg text-sm font-semibold transition-colors shrink-0"
                            >
                                <Code className="w-4 h-4" />
                                Source Code
                                <ExternalLink className="w-3 h-3 opacity-50" />
                            </a>
                        </div>

                        <div className="space-y-3 text-slate-400">
                            <p className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full shrink-0"></span>
                                Developed a cross-platform mobile application for inventory management and Point of Sale (POS) operations using .NET 8 (MAUI).
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full shrink-0"></span>
                                Leveraged AI-Driven Development (Vibe Coding) techniques to accelerate the development lifecycle, enabling rapid prototyping and the implementation of complex features.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Projects;
