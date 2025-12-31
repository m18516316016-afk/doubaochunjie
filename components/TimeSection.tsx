import React from 'react';
import { TimelineSection } from '../types.ts';
import ShowcaseCard from './ShowcaseCard.tsx';

interface TimeSectionProps {
  section: TimelineSection;
  index: number;
}

const TimeSection: React.FC<TimeSectionProps> = ({ section, index }) => {
  const renderContent = () => {
    if (section.layout === 'special-pre-eve') {
      return (
        <div className="flex flex-col space-y-20 w-full">
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-6">
              <span className="text-[11px] font-black tracking-[0.4em] text-red-900 uppercase italic border-l-4 border-red-900 pl-4">
                Visual Core Assets
              </span>
              <div className="flex-grow h-[1px] bg-white/5" />
            </div>
            
            <div className="flex flex-wrap gap-6 md:gap-8">
              {section.items.slice(0, 3).map(item => (
                <ShowcaseCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-6">
              <span className="text-[11px] font-black tracking-[0.4em] text-red-900 uppercase italic border-l-4 border-red-900 pl-4">
                Environment Synthesis
              </span>
              <div className="flex-grow h-[1px] bg-white/5" />
            </div>
            
            <div className="flex flex-wrap gap-6 md:gap-8">
              {section.items.slice(3, 7).map(item => (
                <ShowcaseCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-wrap gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16 w-full">
        {section.items.map((item) => (
          <ShowcaseCard key={item.id} item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="section-container relative py-24 md:py-40 w-full max-w-[100rem] mx-auto px-10 md:px-24 lg:px-40 flex flex-col items-start gap-12 md:gap-20">
      {/* Background Vertical Line Segment */}
      <div className="absolute left-10 md:left-24 lg:left-40 top-0 bottom-0 w-[3px] -translate-x-1/2 pointer-events-none z-0">
          <div className="vertical-line h-full opacity-60" />
      </div>

      <div className="flex flex-col z-20 w-full relative">
        {/* Added pl-8 md:pl-12 to align with the heading container */}
        <div className="mb-4 md:mb-6 pl-8 md:pl-12">
          <span className="magazine-number display-font text-[7rem] md:text-[12rem] font-black leading-none select-none pointer-events-none inline-block">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
        </div>

        <div className="relative">
          {/* Timeline Dot: Centered perfectly on the line */}
          <div className="absolute left-0 -translate-x-1/2 top-[1.2rem] md:top-[2.2rem] timeline-node w-6 h-6 md:w-8 md:h-8 rounded-full z-30 ring-[12px] ring-black" />
          
          <div className="flex flex-col space-y-6 md:space-y-8 pl-8 md:pl-12">
            <h2 className="serif-title text-5xl md:text-8xl text-white font-black tracking-tighter uppercase leading-[0.85]">
              {section.timeLabel}
            </h2>
            <div className="flex items-start space-x-6 max-w-3xl">
              <div className="w-12 h-[2px] bg-red-900 mt-3 flex-shrink-0" />
              <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed uppercase tracking-[0.12em] opacity-80">
                {section.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full z-10 pt-4 pl-8 md:pl-12">
        {renderContent()}
      </div>
    </div>
  );
};

export default TimeSection;