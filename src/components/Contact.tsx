import React from 'react';

export default function Contact() {
  return (
    <>
      <section className="fade-up delay-4">
        <div className="bg-ink rounded-[24px] p-10 mb-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] -top-1/2 -left-1/2 w-[200%] h-[200%]"></div>
          <div className="relative z-10">
            <h2 className="font-serif text-[22px] font-normal leading-[1.2] mb-1.5">
              Let&apos;s build<br /><em className="italic">something together</em>
            </h2>
            <p className="text-[15px] opacity-70 mb-8 max-w-[320px] mx-auto">
              Open to pharma–tech collabs, CDM roles, PV ops, and anything at the intersection of healthcare + code.
            </p>
            <a 
              href="mailto:ayushgupta.creative@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-ink rounded-full text-[14px] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z"/></svg>
              Say hello
            </a>
          </div>
        </div>
      </section>

      <footer className="fade-up delay-5 pb-16 text-center border-t border-black/10 pt-10">
        <span className="font-serif text-[14px] text-ink-faint">
          Ayush Gupta <span className="inline-block w-1 h-1 bg-ink-faint rounded-full mx-1 align-middle"></span> 2025
        </span>
      </footer>
    </>
  );
}
