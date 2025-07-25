import { resumeData } from '@/data/resumeData';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Star, Gamepad, Fish } from 'lucide-react';

const Section: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode }> = ({ title, children, icon }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-blue-400 border-b-2 border-gray-700 pb-2 mb-4 flex items-center">
      {icon && <span className="mr-3">{icon}</span>}
      {title}
    </h2>
    {children}
  </section>
);

const ResumePage = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-2xl max-w-5xl mx-auto animate-fade-in-up">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-white">{resumeData.name}</h1>
        <div className="flex justify-center items-center space-x-6 mt-4 text-gray-400">
          <div className="flex items-center"><Phone size={16} className="mr-2" /> {resumeData.contact.phone}</div>
          <div className="flex items-center"><Mail size={16} className="mr-2" /> {resumeData.contact.email}</div>
          <div className="flex items-center"><MapPin size={16} className="mr-2" /> {resumeData.contact.location}</div>
        </div>
        <div className="mt-2 text-blue-400 font-semibold">
          {resumeData.status} | 期望薪资: {resumeData.expectedSalary}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <aside className="md:col-span-1">
          <Section title="个人简介" icon={<Star size={20} />}>
            {resumeData.summary.map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-4 text-sm leading-relaxed">{paragraph}</p>
            ))}
          </Section>
          <Section title="专业技能" icon={<GraduationCap size={20} />}>
            <ul className="flex flex-wrap gap-2">
              {resumeData.skills.map(skill => (
                <li key={skill} className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full">{skill}</li>
              ))}
            </ul>
          </Section>
          <Section title="教育背景" icon={<GraduationCap size={20} />}>
            <p className="font-bold text-white">{resumeData.education.school}</p>
            <p className="text-gray-400 text-sm">{resumeData.education.major}, {resumeData.education.degree}</p>
            <p className="text-gray-400 text-sm">{resumeData.education.period}</p>
          </Section>
           <Section title="兴趣爱好" icon={<Gamepad size={20} />}>
             <ul className="flex items-center space-x-4">
               {resumeData.interests.map(interest => (
                 <li key={interest} className="flex items-center text-gray-300">
                   {interest === '主机游戏' ? <Gamepad size={16} className="mr-2" /> : <Fish size={16} className="mr-2" />}
                   {interest}
                 </li>
               ))}
             </ul>
           </Section>
        </aside>

        <main className="md:col-span-2">
          <Section title="工作经历" icon={<Briefcase size={20} />}>
            <div className="space-y-8">
              {resumeData.workExperience.map((job, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-gray-700">
                   <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1"></div>
                  <h3 className="text-xl font-bold text-white">{job.company}</h3>
                  <p className="text-blue-400 font-semibold my-1">{job.title} - {job.location}</p>
                  <p className="text-sm text-gray-500 mb-3">{job.period}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default ResumePage; 