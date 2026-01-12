'use client';
import Image from "next/image";
import { useState } from "react";

export default function ManifestSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    
       
    <section className="min-h-screen bg-[#D9D9DF] text-[#161519] !py-24 !px-6 flex flex-col items-center !pb-[300px] !pt-[120px]">
    
      {/* 1. TOP IMAGE AREA */}
      {/* This is where you put your file. The blue label sits on top of it. */}
      <div className="relative w-full max-w-[974px] mb-20">
                <div className="relative w-full max-w-[974px] aspect-[16/9] bg-black overflow-hidden group">
                {!isPlaying ? (
                <>
                    {/* The Placeholder Image */}
                    <Image 
                    src="/video.png" 
                    alt="Treasury Technical Core Detail"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                    />
                    
                    {/* Play Button Overlay */}
                    <button 
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center"
                    >
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
                    </div>
                    </button>
                </>
                ) : (
                /* The Actual Video Embed (YouTube Placeholder) */
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                )}
            </div>
        </div>
        
       

      {/* 2. TEXT CONTENT */}
      <div className="w-full max-w-[974px] flex flex-col gap-16 !mt-[200px]">
        
        {/* --- The Moment --- */}
        <div className="flex flex-col gap-6 !mb-[100px]">
          <div className="self-start bg-[#0053A2] px-4 py-2 !mb-[40px]">
        <h2 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-[#D5D5DC] font-mono  tracking-[0.2em] font-bold  !px-[16px] !py-[8px] w-[227px] h-[48px] text-[24px]">
              The Moment
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-[20px] !font-[300] text-[#161519] leading-relaxed font-[var(--font-noto-sans)]">
            <p>
              The US Treasury is entering a phase of foundational technical <br /> choice.
            </p>
            <p>
              Here, interfaces harden into dependencies, schemas into <br /> contracts, and workarounds into policy.
            </p>
            <p>
              What takes shape becomes precedent, touching every facet of <br /> the US economy and society.
            </p>
            <p>
              The window is open now.
            </p>
          </div>
        </div>

        {/* --- The Response --- */}
        <div className="flex flex-col gap-6 !mb-[100px]">
          <div className="self-start bg-[#0053A2] !mb-[40px]">
          <h2 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-[#D5D5DC] font-mono text-lg tracking-[0.2em] font-[700]  !px-[16px] !py-[8px] w-[264px] h-[48px] text-[24px]">
              The Response
           </h2>
          </div>

          <div className="flex flex-col gap-6 text-[20px] !font-[300] text-[#161519] leading-relaxed font-[var(--font-noto-sans)]">
            <p className="max-w-[600px]">
              Treasury is convening 36 engineers for three months of intensive preparation before embedding them as Institutional Deployed Engineers to amplify Treasury&apos;s technical core.
            </p>
            <p className="max-w-[600px]">
              Those who complete this will formally assume roles at the Treasury, working on systems that shape the economy - reaching and protecting every American and touching trillions of dollars of scope.
            </p>
          </div>
        </div>

      </div>
    </section>
    
    
  );
}