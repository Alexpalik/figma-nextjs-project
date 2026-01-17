'use client';
import Image from "next/image";
import { useState } from "react";

export default function ManifestSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    
       
    <section className="relative min-h-screen bg-[#D9D9DF] text-[#161519] !py-24 !px-6 flex flex-col items-center md:!pb-[70px] !pt-[120px]" >
    
      {/* 1. TOP IMAGE AREA */}
      {/* This is where you put your file. The blue label sits on top of it. */}
      <div className="relative w-full max-w-[1097px] mb-20">
                <div className="relative w-full max-w-[1097px] aspect-[16/9] bg-black overflow-hidden group">
                {!isPlaying ? (
                <>
                    {/* The Placeholder Image */}
                    <Image 
                    src="/vid_preview.png" 
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
                /* The Actual Video Embed */
                <video
                    className="absolute inset-0 w-full h-full"
                    controls
                    autoPlay
                    muted
                >
                    <source src="/c36_v2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                )}
            </div>
        </div>
        
       

      {/* 2. TEXT CONTENT */}
      <div className="section-bg w-full max-w-[650px] flex flex-col gap-16 !mt-[170px]"
      style={{ backgroundImage: 'url(/section2.svg)', backgroundPosition: 'right 120px', backgroundRepeat: 'no-repeat', backgroundSize: 'auto 800px'
       
      }}
      >
        
        {/* --- The Moment --- */}
        <div className="flex flex-col gap-6 !mb-[100px]">
          <div className="self-start bg-[#0053A2] px-4 py-2 !mb-[40px]">
            <h2 style={{ fontFamily: 'var(--font-kode-mono)' }} className="flex items-center justify-center text-[#D5D5DC]   tracking-[0.3em] font-bold  !px-[16px] !py-[4px] w-[227px] h-[32px] text-[20px] text-center">
              The Moment
            </h2>
          </div>

          <div className="flex flex-col gap-[40px] text-[16px] !font-light text-[#161519] leading-relaxed tracking-[0.1em] style-light leading-none"
           style={{ fontFamily: 'var(--font-roboto-mono)' }}
          >
            <p>
              The US Treasury is entering a phase of foundational technical choice.
            </p>
            <p>
              Here, interfaces harden into dependencies, schemas into contracts, and workarounds into policy.
            </p>
            <p>
              What takes shape becomes precedent, touching every facet of the US economy and society.
            </p>
            <p>
              The window is open now.
            </p>
          </div>
        </div>

        {/* --- The Response --- */}
        <div className="flex flex-col gap-6 !mb-[100px]">
          <div className="self-start bg-[#0053A2] !mb-[40px]">
          <h2 style={{ fontFamily: 'var(--font-kode-mono)' }} className="flex items-center justify-center text-[#D5D5DC] font-mono  tracking-[0.3em] font-bold  !px-[16px] !py-[4px] w-[269px] h-[32px] text-[20px] text-center">
              The Response
           </h2> 
          </div>

          <div className="flex flex-col gap-6 text-[16px] !font-[300] text-[#161519] leading-relaxed font-[var(--font-roboto-mono)]"
          style={{ fontFamily: 'var(--font-roboto-mono)' }}>
            <p className="max-w-[1000px]">
              Treasury is convening 36 engineers for three months of intensive preparation before embedding them as Institutional Deployed Engineers to amplify Treasury&apos;s technical core.
            </p>
            <p>

            </p>
            <p className="max-w-[1000px]">
              Those who complete this will formally assume roles at the Treasury, working on systems that shape the economy - reaching and protecting every American and touching trillions of dollars of scope.
            </p>
          </div>
        </div>

      </div>
    </section>
    
    
  );
}