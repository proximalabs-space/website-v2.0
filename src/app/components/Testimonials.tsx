"use client";

import React from "react";

// Mock Data matching the exact names, roles, and review text from your screenshot
const row1Testimonials = [
  {
    name: "David Elson",
    role: "Managing Director",
    avatarBg: "bg-blue-100 text-blue-600",
    initials: "DE",
    quote: "Their innovative approach to our strategy, brand design, marketing materials, and online presence has resulted in a unified brand identity deeply connected to our fundamental principles."
  },
  {
    name: "Marcus Thorne",
    role: "Head of Creative",
    avatarBg: "bg-amber-100 text-amber-600",
    initials: "MT",
    quote: "The creative overhaul of our roadmap, corporate image, advertising collateral, and web interface has delivered a consistent brand message remarkably rooted in our company's mission and heritage."
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Marketing",
    avatarBg: "bg-emerald-100 text-emerald-600",
    initials: "ER",
    quote: "Our thinking perspective on our growth, creative direction, promotional content, and digital footprint has built a seamless brand narrative powerfully reflective of our primary organizational objectives."
  },
  {
    name: "Sarah Jenkins",
    role: "COO",
    avatarBg: "bg-purple-100 text-purple-600",
    initials: "SJ",
    quote: "Their strategic insight into our vision, visual identity, digital assets, and social engagement has created a cohesive brand experience perfectly aligned with our core values and long-term business goals."
  }
];

const row2Testimonials = [
  {
    name: "Alistair Cook",
    role: "Director of Innovation",
    avatarBg: "bg-rose-100 text-rose-600",
    initials: "AC",
    quote: "The sophisticated refinement of our outlook, brand architecture, marketing tools, and online ecosystem has produced a unified brand voice strongly anchored to our essential beliefs and philosophy."
  },
  {
    name: "Naomi Sato",
    role: "CEO",
    avatarBg: "bg-indigo-100 text-indigo-600",
    initials: "NS",
    quote: "Their collaborative development of our focus, brand language, creative assets, and digital strategy has yielded a streamlined brand persona closely mirroring our foundational ethics and unique identity."
  },
  {
    name: "Julian Vance",
    role: "Executive Director",
    avatarBg: "bg-teal-100 text-teal-600",
    initials: "JV",
    quote: "The holistic transformation of our planning, graphic design, sales assets, and virtual profile has established a balanced brand authority clearly representative of our internal culture and standards."
  },
  {
    name: "Chloe Whitmore",
    role: "Brand Principal",
    avatarBg: "bg-cyan-100 text-cyan-600",
    initials: "CW",
    quote: "Their expert integration of our goals, aesthetic style, print media, and mobile platform has fostered a synchronized brand presence authentically tied to our original purpose and vision."
  }
];

export default function Testimonials() {
  // Duplicating arrays to ensure seamless, gap-free continuous looping
  const doubleRow1 = [...row1Testimonials, ...row1Testimonials, ...row1Testimonials];
  const doubleRow2 = [...row2Testimonials, ...row2Testimonials, ...row2Testimonials];

  return (
    <section className="w-full py-24 bg-[#f8f9fa] text-slate-900 overflow-hidden relative">
      
      {/* Dynamic Keyframes for Pure CSS Infinite Scrolling Track */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 35s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 35s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Header Container */}
      <div className="mx-auto max-w-7xl px-6 mb-16">
        <span className="text-xs font-mono tracking-[0.2em] text-blue-600 uppercase font-semibold block mb-4">
          ( 07 ) Client Stories
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          People love building <br /> with Systema
        </h2>
      </div>

      {/* Marquee Track Rows Wrapper */}
      <div className="flex flex-col border-y border-slate-200/70 divide-y divide-slate-200/70">
        
        {/* ROW 1: Moving Rightwards */}
        <div className="overflow-hidden w-full flex bg-white py-0">
          <div className="animate-marquee-right">
            {doubleRow1.map((item, index) => (
              <div 
                key={`row1-${index}`} 
                className="w-[380px] sm:w-[440px] flex flex-col border-r border-slate-200/70 select-none"
              >
                {/* Header Information area */}
                <div className="flex items-center gap-3.5 p-6 pb-5">
                  <div className={`w-11 h-11 rounded-full ${item.avatarBg} flex items-center justify-center font-semibold text-sm shrink-0 shadow-sm`}>
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-950 tracking-tight">{item.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
                  </div>
                </div>
                
                {/* Visual grid separation rule */}
                <div className="w-full border-t border-slate-200/70" />
                
                {/* Main feedback text block */}
                <div className="p-6 pt-5">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moving Leftwards */}
        <div className="overflow-hidden w-full flex bg-white py-0">
          <div className="animate-marquee-left">
            {doubleRow2.map((item, index) => (
              <div 
                key={`row2-${index}`} 
                className="w-[380px] sm:w-[440px] flex flex-col border-r border-slate-200/70 select-none"
              >
                {/* Header Information area */}
                <div className="flex items-center gap-3.5 p-6 pb-5">
                  <div className={`w-11 h-11 rounded-full ${item.avatarBg} flex items-center justify-center font-semibold text-sm shrink-0 shadow-sm`}>
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-950 tracking-tight">{item.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
                  </div>
                </div>
                
                {/* Visual grid separation rule */}
                <div className="w-full border-t border-slate-200/70" />
                
                {/* Main feedback text block */}
                <div className="p-6 pt-5">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}