import React from 'react';
import Section from './Section';
import { Brain } from 'lucide-react';

const About = () => {
    return (
        <Section>
            <div className="bg-slate-800/40 rounded-2xl p-8 border border-slate-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Brain size={120} />
                </div>

                <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                    <span className="w-8 h-1 bg-teal-400 rounded-full inline-block"></span>
                    About Me
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                    Third-year Information Technology student at Bangkok University. I have a strong interest in <span className="text-teal-400 font-semibold">Mobile App Development (C#/.NET MAUI)</span> and <span className="text-teal-400 font-semibold">Cloud Computing (AWS)</span>. Currently practicing my skills by building a POS application and learning how to use AI tools to assist in coding. Eager to learn from experienced developers and grow my technical skills in a real-world environment.
                </p>
            </div>
        </Section>
    );
};

export default About;
