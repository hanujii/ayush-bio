import React from 'react';

interface Project {
  num: string;
  title: string;
  description: string;
  stack: string[];
  badge: string;
  badgeType: 'live' | 'building' | 'concept';
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Drip.ing',
    description: 'An AI-powered fashion styling app built for Indian Gen Z. Upload your wardrobe, get styled by LLaMA 3.3 — your personal Style DNA, daily outfit drops, and curated affiliate picks.',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Groq / LLaMA', 'Tailwind CSS'],
    badge: 'Building',
    badgeType: 'building',
    link: 'https://driping.vercel.app',
    featured: true,
  },
  {
    num: '02',
    title: 'Padh Lo Yaar',
    description: 'A full AI study toolbox — chat with PDFs, solve questions from images, generate exams, get voice-enabled tutoring, and write on an infinite whiteboard. 10+ tools, one app, built for students who mean business.',
    stack: ['Next.js 14', 'Gemini Pro', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'tldraw', 'TipTap', 'Monaco Editor'],
    badge: 'Open Source',
    badgeType: 'live',
    link: 'https://plyai.vercel.app',
    featured: true,
  },
  {
    num: '03',
    title: 'PV Research',
    description: 'Pharmacovigilance operations & signal detection — combining clinical background with data-driven safety monitoring.',
    stack: ['IQVIA', 'Safety Data'],
    badge: 'Active',
    badgeType: 'live',
  },
  {
    num: '04',
    title: 'M.Pharma',
    description: 'Postgraduate research in Pharmaceutical Chemistry — spectroscopy, computational chemistry, and ADMET prediction.',
    stack: ['Pharma Chem', 'ADMET'],
    badge: 'In Progress',
    badgeType: 'concept',
  }
];

function ProjectCard({ project }: { project: Project }) {
  const CardWrapper = project.link ? 'a' : 'div';
  const badgeClasses = {
    live: 'bg-[#e8f5e9] text-[#2e7d32]',
    building: 'bg-[#fff8e1] text-[#b08d00]',
    concept: 'bg-[#f5f5f5] text-[#757575]',
  };

  return (
    <CardWrapper
      href={project.link}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noopener noreferrer" : undefined}
      className={`
        bg-white/70 backdrop-blur-md border border-white/40 rounded-[20px] p-7
        relative overflow-hidden transition-all duration-400 cubic-bezier(0.23, 1, 0.32, 1)
        shadow-[0_4px_24px_rgba(0,0,0,0.02)]
        hover:translate-y-[-4px] hover:scale-[1.01] hover:bg-white hover:border-accent hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
        grid grid-cols-[1fr_auto] gap-5
      `}
    >
      <div>
        <p className="font-serif text-[12px] text-accent font-medium italic mb-3">No. {project.num}</p>
        <h3 className="font-serif text-[20px] font-normal text-ink leading-[1.2] mb-2">{project.title}</h3>
        <p className="text-[13px] leading-[1.6] text-ink-muted font-light">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3.5">
          {project.stack.map((item) => (
            <span key={item} className="text-[10.5px] px-2 py-0.75 bg-paper-warm rounded-sm text-ink-muted font-normal">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2.5">
        <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap ${badgeClasses[project.badgeType]}`}>
          {project.badge}
        </span>
      </div>
      {project.link && (
        <span className="absolute bottom-[18px] right-[18px] text-[15px] text-ink-faint transition-all duration-200 group-hover:text-ink group-hover:translate-x-[2px] group-hover:translate-y-[-2px]">
          ↗
        </span>
      )}
    </CardWrapper>
  );
}

export default function Projects() {
  return (
    <section className="fade-up delay-2">
      <p className="text-[10.5px] font-medium tracking-[0.16em] uppercase text-ink-faint mb-6">Selected Projects</p>
      <div className="flex flex-col gap-4 mb-14">
        {projects.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>
    </section>
  );
}
