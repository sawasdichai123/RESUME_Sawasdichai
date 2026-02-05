import React from 'react';
import Section from './Section';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationItem = ({ year, school, degree, details, gpa }) => (
    <div className="relative pl-8 md:pl-0">
        {/* Timeline line */}
        <div className="md:hidden absolute left-2 top-0 bottom-0 w-0.5 bg-slate-700"></div>

        <div className="md:flex items-start justify-between group">
            <div className="md:w-1/3 mb-2 md:mb-0 md:pr-8 md:text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-teal-400 rounded-full text-sm font-semibold border border-slate-700">
                    <Calendar size={14} />
                    {year}
                </div>
            </div>

            {/* Timeline dot desktop */}
            <div className="hidden md:block absolute left-1/3 top-2 w-3 h-3 bg-teal-500 rounded-full border-4 border-slate-900 z-10 -ml-1.5"></div>

            <div className="md:w-2/3 md:pl-12 pb-10 relative">
                {/* Timeline dot mobile */}
                <div className="md:hidden absolute left-2 top-2 w-3 h-3 bg-teal-500 rounded-full border-4 border-slate-900 z-10 -ml-1.5"></div>

                <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{school}</h3>
                <p className="text-lg text-slate-300 font-medium mt-1">{degree}</p>

                {details && <p className="text-slate-400 mt-2">{details}</p>}
                {gpa && (
                    <div className="mt-2 inline-block px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 border border-slate-700">
                        GPA: {gpa}
                    </div>
                )}
            </div>
        </div>
    </div>
);

const Education = () => {
    return (
        <Section title="Education">
            <div className="relative">
                <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-0.5 bg-slate-800"></div>

                <div className="space-y-2">
                    <EducationItem
                        year="2023 - Present"
                        school="Bangkok University"
                        degree="Bachelor of Science in Information Technology"
                        details="School of Information Technology and Innovation"
                    />

                    <EducationItem
                        year="2019 - 2022"
                        school="Siam Business Administration Technological College (SBAC)"
                        degree="Vocational Certificate in Business Computer (English Program)"
                        gpa="3.94"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Education;
