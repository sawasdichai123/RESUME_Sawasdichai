import React from 'react';
import Section from './Section';
import { Cloud, Terminal, Cpu, Languages } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, colorClass }) => (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
        <div className={`flex items-center gap-3 mb-4 ${colorClass}`}>
            <Icon className="w-6 h-6" />
            <h3 className="font-bold text-lg text-slate-200">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-900/50 text-slate-300 text-sm font-medium rounded-md border border-slate-700/50 hover:border-slate-500/50 transition-colors cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <Section title="Technical Skills" className="bg-slate-800/20 my-8 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCategory
                    title="Cloud Computing (AWS)"
                    icon={Cloud}
                    colorClass="text-orange-400"
                    skills={['AWS Lambda', 'EC2', 'API Gateway', 'VPC', 'S3', 'DynamoDB', 'AWS Amplify', 'AWS Cloud9']}
                />

                <SkillCategory
                    title="Software Development"
                    icon={Terminal}
                    colorClass="text-blue-400"
                    skills={['C#', '.NET 8 (MAUI)', 'Python', 'SQL', 'React', 'HTML', 'CSS', 'Git', 'Docker', 'VS Code']}
                />

                <SkillCategory
                    title="AI-Augmented Development"
                    icon={Cpu}
                    colorClass="text-purple-400"
                    skills={['AI-Assisted Coding (Vibe Coding)', 'Gemini', 'ChatGPT']}
                />

                <SkillCategory
                    title="Languages"
                    icon={Languages}
                    colorClass="text-green-400"
                    skills={['Thai (Native)', 'English (Intermediate - CEFR B1)']}
                />
            </div>
        </Section>
    );
};

export default Skills;
