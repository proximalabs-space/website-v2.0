import Image from "next/image";
import ShaderBackground from "./components/heroBg";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col justify-center">
      
      {/* Dynamic Background Shader */}
      <ShaderBackground />

      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 text-center flex flex-col items-center">
        
        <div className="mb-6 flex items-center gap-3 text-sm font-medium text-gray-300">
          <div className="flex text-white tracking-widest text-lg select-none">
            ★★★★★
          </div>
          <span className="text-gray-600">|</span>
          <span>Trusted Digital Transformation & Training Partner</span>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl md:leading-[1.1]">
          Building Digital Products & <br /> Developing Future Talent
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          We engineer enterprise-grade solutions for scaling businesses while providing industrial training to cultivate industry-ready technology talent.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center">
          <button className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200">
            Start Your Project
          </button>
          <button className="rounded-full bg-white/5 border border-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
            Explore Training
          </button>
        </div>

        {/* Tech Stack Horizontal Showcase */}
        <div className="mt-28 w-full">
          <p className="text-sm font-medium text-gray-500 mb-8 tracking-wide">Core Technologies</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70 md:gap-14 items-center">

            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
              <span className="font-semibold text-xl tracking-tight">Next.js</span>
            </div>

            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              <span className="font-semibold text-xl tracking-tight">React</span>
            </div>

            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              <span className="font-semibold text-xl tracking-tight">Flutter</span>
            </div>

            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span className="font-semibold text-xl tracking-tight">Node.js</span>
            </div>

            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line><line x1="4.93" y1="19.07" x2="19.07" y2="4.93"></line></svg>
              <span className="font-semibold text-xl tracking-tight">Python</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CORE CAPABILITIES GRID (01)                                              */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 md:py-32 bg-black text-white border-t border-white/10 overflow-hidden">

        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/corporate.png"
            alt="Office Background"
            fill
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className="max-w-5xl mb-20">
            <span className="text-xs font-mono tracking-[0.25em] text-gray-400 uppercase block mb-6">
              ( 01 ) Technology Innovation & Workforce Development
            </span>
            <h2 className="text-2xl md:text-4xl font-normal leading-relaxed text-gray-300 tracking-tight">
              <strong className="font-semibold text-white">Software Development Company</strong>,
              delivering end-to-end technology solutions and architectures. We blend strategic engineering,
              advanced AI systems, and expert-led <strong className="font-semibold text-white">Industrial Training</strong> to help 
              enterprises scale efficiently and shape the next generation of digital talent in an ever-
              <strong className="font-semibold text-white">changing world.</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10">

            <div className="p-8 border-r border-b border-white/10 flex flex-col gap-4 min-h-[220px]">
              <div className="text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 2h14M5 22h14M19 2v6a7 7 0 0 1-14 0V2M5 22v-6a7 7 0 0 1 14 0v6" />
                  <path d="M12 12v3" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight">Software Development</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Custom Web Development, Mobile App Development, and premium SaaS development built to perform at scale.
              </p>
            </div>

            <div className="p-8 border-r border-b border-white/10 flex flex-col gap-4 min-h-[220px]">
              <div className="text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight">AI Solutions</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Enterprise AI Development Company capabilities including advanced models, automation pipelines, and analytics.
              </p>
            </div>

            <div className="p-8 border-r border-b border-white/10 flex flex-col gap-4 min-h-[220px]">
              <div className="text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight">Industrial Training</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Rigorous skill development and structured Internship Programs designed to align candidates with real-world requirements.
              </p>
            </div>

            <div className="p-8 border-r border-b border-white/10 flex flex-col gap-4 min-h-[220px]">
              <div className="text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight">Modern Tech Stack</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Full Stack Development Training and deployments utilizing React, Next.js, Cloud, and scalable cloud solutions.
              </p>
            </div>

            <div className="p-8 border-r border-b border-white/10 flex flex-col gap-4 min-h-[220px]">
              <div className="text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M7 10.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3z" />
                  <path d="M12 10.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight">Career Development</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Targeted AI Training and strategic mentoring tailored for students, professionals, and career switchers.
              </p>
            </div>

            <div className="p-8 border-r border-b border-white/10 flex flex-col gap-4 min-h-[220px]">
              <div className="text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M12 11h.01M9 11h.01M15 11h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight">Long-Term Partnership</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Providing consistent digital transformation Consulting services alongside robust client onboarding architecture.
              </p>
            </div>

          </div>
        </div>
      </section>

     
     

      {/* ========================================================================= */}
      {/* UPDATED SECTION 2: INDUSTRIAL TRAINING ECOSYSTEM (STRATIV GRID LOOKALIKEM) */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 bg-white text-black border-t border-gray-200">
        <div className="mx-auto w-full max-w-7xl px-6 text-center flex flex-col items-center">
          
          {/* Main Hero Header */}
          <h2 className="max-w-4xl text-5xl font-black tracking-tighter uppercase sm:text-7xl md:leading-[1.0] text-neutral-900">
            JOIN THE TEAMS SHAPING <br />
            <span className="text-amber-400 block mt-1">TOMORROW'S STRATEGY</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base text-neutral-600 font-medium leading-relaxed">
            Across industries and time zones, fast-moving teams rely on our <span className="font-semibold text-neutral-900">Industrial Training Ecosystem</span> to turn uncertainty into structure, align technical core competencies, and move forward with precision.
          </p>

          {/* Grid Layout Container */}
          <div className="mt-16 w-full grid grid-cols-2 md:grid-cols-6 border border-gray-200 bg-gray-50">
            
            {/* Box 1: Full-Stack */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-white border-r border-b border-gray-200 min-h-[160px] hover:bg-neutral-50/50 transition duration-200">
              <span className="font-bold text-lg tracking-tight text-neutral-900 uppercase">Full-Stack</span>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 mt-1 uppercase">Architecture</span>
            </div>

            {/* Box 2: Next.js */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-neutral-100/50 border-r border-b border-gray-200 min-h-[160px] hover:bg-neutral-50/50 transition duration-200">
              <span className="font-black text-xl tracking-tighter text-neutral-900">Next.js 15</span>
            </div>

            {/* Box 3: Mobile Apps */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-white border-r border-b border-gray-200 min-h-[160px] hover:bg-neutral-50/50 transition duration-200">
              <span className="font-extrabold text-lg tracking-tight text-neutral-800">Flutter Labs</span>
            </div>

            {/* Box 4: Applied AI */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-white border-r border-b border-gray-200 min-h-[160px] hover:bg-neutral-50/50 transition duration-200">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-bold text-lg tracking-tight text-neutral-900 uppercase">Applied AI</span>
              </div>
            </div>

            {/* Box 5: Systems Design */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-neutral-100/50 border-r border-b border-gray-200 min-h-[160px] hover:bg-neutral-50/50 transition duration-200">
              <span className="font-light text-xl tracking-wide text-neutral-900">System.design</span>
            </div>

            {/* Box 6: Engineering */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-white border-b border-gray-200 min-h-[160px] hover:bg-neutral-50/50 transition duration-200 md:border-r-0">
              <span className="font-black text-lg text-neutral-900 italic tracking-tight">Quantum³</span>
            </div>

            {/* Box 7: Cloud Infrastructure */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-white border-r border-gray-200 min-h-[160px] hover:bg-neutral-50/50 transition duration-200 md:border-b-0">
              <span className="font-bold text-sm tracking-[0.2em] text-neutral-500 uppercase">Cloud Native</span>
            </div>

            {/* Box 8: Data Pipelines */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-neutral-100/50 border-r border-gray-200 min-h-[160px] hover:bg-neutral-50/50 transition duration-200 md:border-b-0">
              <span className="font-bold text-base tracking-tight text-neutral-800">DataFlow.io</span>
            </div>

            {/* Box 9: Industry Sprints */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-white border-r border-gray-200 min-h-[160px] hover:bg-neutral-50/50 transition duration-200 md:border-b-0">
              <span className="font-medium text-lg text-neutral-900 tracking-tight">⚡ SolarSprints</span>
            </div>

            {/* Box 10: Mentorship */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-white border-r border-gray-200 min-h-[160px] hover:bg-neutral-50/50 transition duration-200 md:border-b-0">
              <span className="font-serif italic text-xl text-neutral-800">Direct.Mentorship</span>
            </div>

            {/* Box 11: Production Vetted */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-neutral-100/50 border-r border-gray-200 min-h-[160px] hover:bg-neutral-50/50 transition duration-200 md:border-b-0">
              <span className="font-mono text-xs font-bold text-neutral-600 tracking-wider uppercase">Vetted_Talent</span>
            </div>

            {/* Box 12: Placement Systems */}
            <div className="group relative flex flex-col items-center justify-center p-12 bg-white min-h-[160px] hover:bg-neutral-50/50 transition duration-200">
              <span className="font-semibold text-base text-neutral-900 tracking-tighter">Enterprise.Alumni</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* VIDEO BACKDROP DISPLAY (04)                                              */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-black border-t border-white/10">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/flower.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 backdrop-blur-[4px] z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-xs font-mono tracking-[0.25em] text-blue-500 uppercase block mb-4">
            ( 04 ) Empowering Businesses and Future Professionals
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
            Architecting high-performance <br /> global technology systems
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-gray-400 leading-relaxed font-light">
            Engineered to bridge production software development and scalable skill architectures, maximizing operational potential across networks.
          </p>
        </div>
      </section>

      {/* Testimonials Injection Component */}
      <Testimonials />

      {/* ========================================================================= */}
      {/* NEW SECTION 3: DOUBLE PERSUASION CONVERSION CALL-TO-ACTION (CTA)         */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 bg-black text-white border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Let's Shape the Digital Horizon
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 font-light mb-10 text-sm md:text-base">
            Partner with our elite development agency to deliver complex production applications, or enroll in our rigorous vetting tracks to transition into an industry-ready technician.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 shadow-lg shadow-blue-600/20">
              Build Enterprise Solutions
            </button>
            <button className="w-full sm:w-auto rounded-full bg-transparent border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/5">
              Join Industrial Program
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}