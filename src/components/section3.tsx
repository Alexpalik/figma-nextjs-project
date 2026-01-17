import React from 'react';
import Image from 'next/image';

export default function TechnicalCoreSection() {
  return (
    <>
    {/* <div className="!w-full relative !mb-[-1px] !mt-[-300px]">
        <Image 
          src="/Group (5).png" // Replace with your actual image path
          alt="Technical Core Header"
          width={1455}
          height={314}
          className="w-full h-auto"
        />
       
      </div> */}
      <section className="!bg-[#0053A2] text-white flex flex-col items-center !px-6 !py-[200px]">
      
      {/* 1. FULL WIDTH HEADER IMAGE */}

      
      {/* 2. TEXT CONTENT AREA */}
      <div className="relative w-full flex flex-col items-center justify-center px-6 py-24 overflow-hidden md:overflow-visible">
         {/* Background image layer */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            top: '-50px',    // Moves the image up beyond the text
            bottom: '-50px', // Moves the image down beyond the text
            left: 0,
            right: 0,
            backgroundImage: 'url(/section3.svg)', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'auto 550px',  
           
          }}
        />
        

        <div className="relative z-10 w-full max-w-[800px] flex flex-col items-center text-center">
          
          {/* Main Title */}
          {/* <h2 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-3xl md:text-[32px] font-mono tracking-[0.3em] uppercase mb-16 md:mb-24 leading-tight !pb-[100px]">
            
          </h2> */}

          <div className="bg-[#D5D5DC] !mb-[100px]">
          <h2 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-[#0053A2] font-mono  tracking-[0.3em] font-bold  !px-[16px] !py-[4px] w-[550px] h-[36px] text-[20px] text-center">
              Treasury&apos;s Technical Core
           </h2>
          </div>

          {/* Content Paragraphs */}
          <div className="flex flex-col gap-10 md:gap-14 text-lg md:text-[18px] leading-relaxed opacity-100 max-w-[700px] font-[var(--font-roboto-mono)] text-[#D9D9DF]
          "
          
          style={{ fontFamily: 'var(--font-roboto-mono)' }}
          >
            <p className="tracking-wide">
              You&apos;ll be part of a concentrated effort to raise the standard of engineering inside one of the most consequential institutions in the world.
            </p>

            <p className="tracking-wide">
              Decisions made here will shape how systems are built, governed, and trusted across government.
            </p>

            <p className="tracking-wide">
              From here the standard will be set.
            </p>

            <p className="tracking-wide">
              The impact felt by <span className="italic font-bold">every</span> American.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
}