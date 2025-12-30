
import React, { useState, useRef, useEffect } from 'react';
import { ShowcaseItem } from '../types.ts';

interface ShowcaseCardProps {
  item: ShowcaseItem;
  className?: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ item, className = "" }) => {
  // 判断是否为视频格式
  const isVideo = (url: string) => {
    if (item.type === 'video' && !url.toLowerCase().includes('.gif')) return true;
    const lowerUrl = url.toLowerCase();
    return (
      (/\.(mp4|webm|ogg|mov|m4v|m3u8)($|\?)/i.test(lowerUrl) || 
      lowerUrl.includes('mime_type=video') ||
      lowerUrl.includes('butterfly.mp4')) && !lowerUrl.includes('.gif')
    );
  };

  // 判断是否为 GIF 格式
  const isGif = (url: string) => {
    return url.toLowerCase().includes('.gif') || url.startsWith('data:image/gif');
  };

  const [mediaUrl, setMediaUrl] = useState(item.imageUrl);
  const [mediaType, setMediaType] = useState<'image' | 'video' | 'gif'>(
    isVideo(item.imageUrl) ? 'video' : (isGif(item.imageUrl) ? 'gif' : 'image')
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMediaUrl(item.imageUrl);
    const type = isVideo(item.imageUrl) ? 'video' : (isGif(item.imageUrl) ? 'gif' : 'image');
    setMediaType(type);
  }, [item.imageUrl, item.type]);

  const handleCardClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setMediaUrl(url);
      if (file.type.startsWith('video')) {
        setMediaType('video');
      } else if (file.type === 'image/gif') {
        setMediaType('gif');
      } else {
        setMediaType('image');
      }
    }
  };

  const sizeClass = 'w-full aspect-[3/4] max-w-[260px]';

  return (
    <div 
      className={`flex flex-col space-y-4 group cursor-pointer ${className} items-start w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(25%-1.5rem)]`} 
      onClick={handleCardClick}
      title="点击更换素材 (支持 JPG/PNG/GIF/MP4)"
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*,video/*"
        onChange={handleFileChange}
      />
      
      <div 
        className={`relative ${sizeClass} rounded-sm overflow-hidden bg-[#0a0000] border border-white/10 shadow-xl transition-all duration-700 group-hover:border-red-900/60`}
      >
        {mediaType === 'video' ? (
          <video 
            src={mediaUrl} 
            key={mediaUrl}
            className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100"
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
          />
        ) : (
          <img 
            src={mediaUrl} 
            alt={item.title} 
            key={mediaUrl}
            className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-all duration-1000 ease-out"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-[1px]">
           <span className="text-white text-[9px] font-black uppercase tracking-[0.3em] border border-white/20 px-4 py-2 bg-black/60 shadow-2xl">
             Replace
           </span>
        </div>

        {(item.badge || mediaType === 'gif') && (
          <div className="absolute top-0 right-0 bg-red-900 text-white text-[9px] px-2 py-0.5 font-black uppercase tracking-tighter z-10 shadow-lg border-b border-l border-white/10">
            {mediaType === 'gif' ? 'GIF ANIMATION' : item.badge}
          </div>
        )}

        {(mediaType === 'video' || mediaType === 'gif') && (
          <div className="absolute bottom-2.5 right-2.5 z-10 text-white/40 group-hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.75a16,16,0,0,1-16.2.3,15.86,15.86,0,0,1-8.12-13.93V40a15.86,15.86,0,0,1,8.12-13.93,16,16,0,0,1,16.2.3l144.08,88.24A15.74,15.74,0,0,1,240,128Z"></path></svg>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-1 w-full pr-2">
        <h4 className="text-gray-300 text-xs md:text-sm font-bold uppercase tracking-[0.05em] group-hover:text-white transition-colors leading-tight truncate">
          {item.title}
        </h4>
        <div className="flex items-center justify-between">
          {item.subTitle ? (
            <span className="text-red-900/80 text-[9px] font-black tracking-widest uppercase italic truncate">
              // {item.subTitle}
            </span>
          ) : (
            <span className="text-gray-700 text-[8px] font-bold tracking-widest uppercase">
              {mediaType === 'video' ? 'VIDEO ASSET' : (mediaType === 'gif' ? 'GIF / MOTION' : '3:4 ASSET')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
