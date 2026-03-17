import React from 'react';

export default function Header() {
  return (
    <header className="fade-up pt-14 relative">
      <div className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-ink-faint mb-8 flex items-center gap-[10px]">
        Ayush Gupta &nbsp;·&nbsp; Portfolio
        <div className="flex-1 h-[1px] bg-black/10"></div>
      </div>

      <div className="flex items-center gap-6 mb-10">
        <div className="relative">
          <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-br from-[#eaddca] to-[#d2c5b3] border-4 border-white shadow-[0_8px_24px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.08)] flex items-center justify-center font-serif text-[28px] text-ink-muted font-medium">
            AG
          </div>
          <span className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-[#4caf72] border-3 border-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]" title="Open to work"></span>
        </div>
        <div className="flex-1">
          <h1 className="font-serif text-[38px] font-normal leading-none tracking-[-0.02em] text-ink mb-2">
            Ayush <em className="italic text-accent">Gupta</em>
          </h1>
          <p className="text-[13px] text-ink-muted font-medium mb-3">
            <a href="https://instagram.com/wakeupayuush" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              @wakeupayuush
            </a>
          </p>
          <p className="text-[15px] leading-[1.5] text-ink-muted font-normal max-w-[400px]">
            Pharma grad by training, builder by obsession — bridging healthcare & technology, one project at a time.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-10 fade-up delay-1">
        <span className="text-[11.5px] font-normal tracking-[0.04em] px-3 py-1.25 rounded-[20px] bg-accent-glow border border-accent text-[#8b6b2e] cursor-default transition-all hover:bg-opacity-20">
          B.Pharm → M.Pharma
        </span>
        {[
          'Pharmacovigilance',
          'Clinical Research',
          'Solo Dev',
          'AI',
          'Raipur / Bhilai'
        ].map((tag) => (
          <span key={tag} className="text-[11.5px] font-normal tracking-[0.04em] px-3 py-1.25 rounded-[20px] border border-black/10 text-ink-muted bg-transparent cursor-default transition-all hover:border-accent hover:text-ink">
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}
