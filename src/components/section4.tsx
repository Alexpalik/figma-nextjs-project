import Image from 'next/image';
import Link from 'next/link';

export default function SelectivitySection() {
  return (
    <section className="bg-[#D9D9DF] text-[#161519] w-full flex flex-col items-center py-24 relative overflow-hidden">
      
      {/* 1. Main Content Area */}
      {/* Added min-h-[850px] to ensure the section stays tall enough for the image */}
      <div className="relative w-full max-w-[971px] !px-6 !py-[100px] !mb-24 !pt-[120px] min-h-[850px] flex flex-col items-center md:align-start">
        
        {/* NEW BACKGROUND LAYER: This prevents the image from being cut */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ 
            backgroundImage: 'url(/section4.svg)', 
            backgroundPosition: ' center 220px', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: "auto 600px", // Increased height to overpass text
          }}
        />

        {/* Header - Blue Box (Relative z-10 to stay above background) */}
        <div className="relative z-10 w-full !mb-[80px]">
          <div className="bg-[#0053A2] !px-[8px] !py-[4px] inline-block">
            <h2 style={{ fontFamily: 'var(--font-kode-mono)' }} className="flex items-center justify-center text-[#D5D5DC] font-mono tracking-[0.3em] font-bold !px-[16px] !py-[4px] w-[261px] h-[32px] text-[20px] text-center">
              Selectivity
            </h2>
          </div>
        </div>

        {/* Text Content (Relative z-10 to stay above background) */}
        <div 
          className="relative z-10 space-y-10 leading-relaxed text-[15px] md:text-[17px] font-[300] max-w-[869px] w-full"  
          style={{ fontFamily: 'var(--font-roboto-mono)' }}
        >
          <p className="font-[300] !mb-[50px]">
            The process will move swiftly on a rolling basis, with introductory calls taking place within 48 hours after nomination. We anticipate concluding the full process within one week.
          </p>

          <ul className="space-y-2 !mb-[80px]">
            {[
              " Stage 1: Nomination or invitation",
              "Stage 2: Introductory conversation",
              "Stage 3: Technical conversation",
              "Stage 4: Selection"
            ].map((item, index) => (
              <li key={index} className="flex items-start ">
                <span className="text-[#0053A2] font-mono font-bold mr-2 md:text-[17px] !font-[400] !mr-[5px]">• </span>
                <span className="text-[#0053A2] font-mono md:text-[17px] !font-[400]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="font-[300] !mb-[80px]">
            The selection committee is made up of technical leaders from ElevenLabs, Anthropic, ASML, Tesla, Oxford University, Harvard University, Stanford University.
          </p>

          <div className="flex justify-end !pt-8">
            <Link href="https://5adne.share.hsforms.com/2mJaj2LW8T-iKhXQGwuztlQ" className="flex justify-center items-center border border-[#0053A2] text-[#0053A2] !px-[16px] !py-[8px] text-[14px] tracking-[0.2em] font-mono hover:bg-[#0053A2] hover:text-white transition-all uppercase font-[var(--font-noto-sans)] max-w-[154px] h-[41px] w-full bg-transparent shadow-[3px_3px_0px_0px_#0053a233]">
              NOMINATION
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Partners Logo Strip - Fixed Dimensions 205x71 */}
      {/* We use border-t and border-l on the container, and border-r/border-b on items to create a perfect grid even when wrapping */}
      {/* <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center border-t border-l border-[#0053A2]">
          
          <PartnerCell name="ElevenLabs" pattern="diagonal1" />
          <PartnerCell name="Anthropic" pattern="plain" />
          <PartnerCell name="ASML" pattern="diagonal" />
          <PartnerCell name="Tesla" pattern="dots" />
          <PartnerCell name="Oxford University" pattern="diagonal3" />
          <PartnerCell name="Harvard University" pattern="plain" />
          <PartnerCell name="Stanford University" pattern="diagonal3" />

        </div>
      </div> */}

      {/* 3. Bottom Treasury Seal */}
      <div className="!p-12 !py-[20px] flex flex-col items-center justify-center gap-[10px] md:!pb-[200px]">
        <div className="relative w-[80px] h-[80px] opacity-50 mix-blend-multiply">
           <Image
            src="/icon_blue.png" 
            alt="Department of Treasury Seal"
            fill
            className="object-contain"
          />
        </div>
        
      </div>

    </section>  
  );
}

// --- Helper Component ---
function PartnerCell({ name, pattern }: { name: string, pattern: 'diagonal' | 'dots' | 'plain' | 'diagonal1' | 'diagonal3' }) {
  return (
    // Added w-[205px] and h-[71px] here
    // Added border-r and border-b to maintain the grid lines
    <div className="relative w-[205px] h-[71px] border-r border-b border-[#0053A2] bg-[#D9D9DF] flex items-center justify-center overflow-hidden group" >
      
      {/* 1. Background Pattern Layer */}
      {pattern === 'diagonal' && (
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, #0053A2 0, #0053A2 1px, transparent 0, transparent 10px)'
          }} 
        />
      )}
      {pattern === 'diagonal1' && (
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: 'repeating-linear-gradient(135deg, #0053A2 0, #0053A2 1px, transparent 0, transparent 10px)'
          }} 
        />
      )}
      {pattern === 'diagonal3' && (
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: "url('/Rectangle 101.png')",
            
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }} 
        />
      )}
      
      
      {pattern === 'dots' && (
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
             backgroundImage: 'radial-gradient(#0053A2 1.5px, transparent 1.5px)', 
             backgroundSize: '12px 12px' 
          }} 
        />
      )}

      {/* 2. The Text (Centered) */}
      <span className="relative z-10 font-roboto-mono text-[14px] tracking-widest text-[#000000] uppercase text-center font-[400]">
        {name}
      </span>

    </div>
  );
}