import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function IntroductionSection() {
  return (
    <section className="h-auto bg-[#0053A2] !py-24 !px-6 flex flex-col items-center !pb-[200px] !pt-[0px] relative md:!pt-[50px]"
    style={{
        backgroundColor: '#0053A2',
        backgroundBlendMode: 'overlay',
        opacity: 0.97 
      }}>
      
{/*       

        <div className=" max-w-[1400px] flex !flex-col gap-16 !mt-[0px]">
        
        
        <div className="flex flex-start gap-6 !mb-[100px]">
          <div className="self-start bg-[#0053A2] px-0 py-2 !mb-[200px]">
        <h2 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-[#D5D5DC] font-mono  tracking-[-0.1em] font-bold  !px-[0px] !py-[8px] w-[300px] h-[48px] text-[150px] text-left">
          TL;DR             
</h2>
          </div>
          </div>
          <div className="flex flex-end">
          <div className="max-w-[500px] !mr-[50px] flex flex-col gap-6 text-[18px] !font-[400] text-[#FFFFFF] leading-relaxed tracking-wide" >
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
        </div>
         */}

         <div className="md:w-[90%] max-w-[1200px] h-auto !mb-[100px]">
        <div className="flex justify-center md:justify-between items-center gap-8 mb-20 ">
            <div className="flex-none !pb-[50px] md:absolute md:left-0 2xl:relative 2xl:left-auto">
                <h1 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-[40px] md:text-[128px] text-[#FFFFFF] m-0 font-bold tracking-wider text-center md:text-left">TL;DR</h1>
            </div>
            
        </div>

        <div className="flex justify-between items-center md:gap-8 mb-12 md:!pt-[100px]">
            <div className="flex-none">
                
            </div>
            
            <div style={{ fontFamily: 'var(--font-roboto-mono)' }} className="flex flex-col gap-6 max-w-[600px] text-[#FFFFFF] tracking-wide text-[18px]">
               <p className="m-0 mb-8 leading-relaxed text-base ">Core36 is a three-month, full-time technical residency designed to prepare engineers to step into the technical core of the U.S. Treasury.</p>
                <p className="m-0 mb-8 leading-relaxed text-base">Committee-led selection by senior <span className="font-bold">technical leaders</span> from <span className="font-bold">Anthropic, Google DeepMind, Tesla, ElevenLabs, Harvard University, Stanford University</span>.</p>
                <p className="m-0 mb-8 leading-relaxed text-base">Nomination-only entry, however we know not everyone is embedded in existing networks so you can pitch to us [email]. </p>
                <p className="m-0 mb-8 leading-relaxed text-base">Built by founding engineers at <span className="font-bold">Gemini, OpenAI. </span></p>
            </div>
        </div>
    </div>

    {/* Pixelbar at the bottom */}
    <Image
      src="/pixelbar-2.png"
      alt="Pixelbar"
      width={1400}
      height={40}
      className="absolute bottom-0 left-0 w-screen h-[169px] object-cover"

    />
        
    </section>
  );
}
