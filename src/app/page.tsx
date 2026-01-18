'use client';
import Image from "next/image";
import ManifestSection from "@/components/section2";
import Lottie from "lottie-react";
import treasuryAnimation from "@/treasury_animation.json";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0053A2] text-white flex flex-col justify-between  items-center"
      style={{
       backgroundColor: '#0053A2',
       backgroundBlendMode: 'overlay',
       opacity: 0.97 
     }}>
     
      {/* Header - Fixed: justify-between and exact max-width matching the GIF area */}
      <header className="flex flex-col md:flex-row gap-[15px] md:gap-0 items-center justify-between w-full max-w-[1157px] px-8 py-12 !pt-[50px] !py-[10px]">
        <div className="flex items-center gap-2">
          <Image
            src="/logo22.png"
            alt="Department of the Treasury Logo"
            width={74}
            height={74}
            className="object-contain"
          />
          <div>
            <h1 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-[36px] font-bold font-[var(--font-kode-mono)]">CORE36</h1>
          </div>
        </div>
        <Link href="https://5adne.share.hsforms.com/2mJaj2LW8T-iKhXQGwuztlQ"  
        style={{ fontFamily: 'var(--font-roboto-mono)' }}
        className="
          !hidden md:!block
          flex
          border border-white border-[0.5px] 
          !px-[10px] !py-[5px] 
          text-center
          justify-center
          items-center
          !font-[400]
          max-w-[154px] h-[41px] w-full !text-[15px]
          shadow-[3px_3px_0px_0px_#2100C7]
          hover:bg-[white] hover:text-[#0053A2] transition-all
          tracking-[2px]
          "
          
          
      
        >NOMINATION
        </Link>
      </header>

      {/* Main Content Area - Increased padding to match screenshot gap */}
      <main className="flex flex-col items-center justify-center py-20 w-full max-w-[1157px]">
        <div className="relative w-full">
        <Lottie 
             animationData={treasuryAnimation} 
             loop={true} 
             className="w-full h-full"
           />
        </div>
      </main>

      {/* Footer - Centered text and large vector at the bottom */}
      <footer className="w-full flex flex-col items-center mt-auto">
        <div className="text-center mb-16 md:!mt-[-120px] !pb-[80px]">
          <h2 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-[40px] font-bold font-[var(--font-noto-sans)]  tracking-tight">CORE36</h2>
          <p style={{ fontFamily: 'var(--font-roboto-mono)' }} className="!text-[18px] font-[400]  tracking-[2.2px]">Treasury Technical Core</p>
        </div>
        
       
      </footer>
      
    </div>
    
  );
}