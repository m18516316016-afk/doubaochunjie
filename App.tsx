
import React from 'react';
import { TIMELINE_DATA } from './constants.tsx';
import TimeSection from './components/TimeSection.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-red-950 selection:text-red-200 overflow-x-hidden bg-magazine-main">
      
      {/* Editorial Header Section */}
      <section className="h-screen flex flex-col items-center justify-center relative text-center px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")'}} />
        
        <div className="relative z-10 space-y-12 max-w-7xl w-full">
          <div className="flex flex-col items-center space-y-6">
            <span className="text-red-900 font-black tracking-[1.5em] uppercase text-[12px] md:text-[14px]">
              Visual Editorial / Doubao
            </span>
            <div className="h-[1px] w-20 bg-red-900/60" />
          </div>

          <h1 className="serif-title text-7xl md:text-[11rem] font-black text-white leading-[1] tracking-tighter uppercase">
            豆包春节
          </h1>
          
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gradient text-xl md:text-3xl font-bold tracking-[0.2em] uppercase">
              金刚位活动效果图鉴
            </span>
            <span className="text-gray-600 text-[10px] md:text-xs font-medium tracking-[0.5em] uppercase opacity-60">
              King Kong Position Visual Archive
            </span>
          </div>

          <div className="pt-12 flex flex-col items-center">
             <div className="w-1.5 h-1.5 bg-red-900 rounded-full animate-ping mb-4" />
             <span className="text-gray-500 text-[10px] md:text-xs font-black tracking-[0.6em] uppercase">Interactive Archive</span>
          </div>
        </div>

        {/* Timeline Indicator (Header Version) */}
        <div className="absolute bottom-20 left-6 md:left-12 flex flex-col items-center space-y-8 opacity-70">
          <div className="timeline-node w-4 h-4 rounded-full mb-2 shadow-[0_0_20px_rgba(204,27,27,1)]" />
          <div className="w-[2px] h-40 vertical-line opacity-100" />
          <span className="text-[10px] text-red-900 uppercase tracking-[0.8em] font-black [writing-mode:vertical-lr]">Scroll to Explore</span>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="relative z-10 pb-60">
        <div className="absolute left-6 md:left-12 top-0 bottom-0 vertical-line opacity-25 pointer-events-none" />
        
        {TIMELINE_DATA.map((section, idx) => (
          <TimeSection 
            key={section.id} 
            section={section} 
            index={idx} 
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="py-60 px-12 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end relative z-10">
          <div className="text-left">
            <h3 className="serif-title text-5xl md:text-6xl font-black text-white/90 mb-4 uppercase tracking-tighter">Doubao Design</h3>
            <p className="text-red-950 text-[12px] font-black tracking-[0.5em] uppercase">Visual Excellence Unit & Studio</p>
          </div>
          <div className="mt-20 md:mt-0 flex flex-col items-end space-y-8">
            <div className="flex space-x-16 text-gray-600 text-[11px] font-black tracking-[0.3em] uppercase">
              <span className="hover:text-red-900 transition-colors cursor-pointer">Archive</span>
              <span className="hover:text-red-900 transition-colors cursor-pointer">Doubao.com</span>
              <span className="hover:text-red-900 transition-colors cursor-pointer">Visual Studio</span>
            </div>
            <p className="text-gray-800 text-[10px] font-medium tracking-widest uppercase opacity-50">© 2025 Doubao Creative. Interactive editorial experience.</p>
          </div>
        </div>
      </footer>

      {/* Floating HUD Indicator */}
      <div className="fixed bottom-12 right-12 z-50">
        <div className="border border-white/15 bg-black/60 backdrop-blur-2xl px-6 py-3 rounded-sm shadow-2xl">
           <span className="text-[10px] text-red-900 font-black uppercase tracking-widest flex items-center gap-3">
             <div className="w-2.5 h-2.5 rounded-full bg-red-800 animate-pulse shadow-[0_0_12px_rgba(204,27,27,0.8)]" />
             Showcase Mode
           </span>
        </div>
      </div>
    </div>
  );
};

export default App;
