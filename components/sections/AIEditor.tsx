'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useRive } from '@rive-app/react-canvas';

function EditorRiveAnimation() {
  const { RiveComponent } = useRive({
    src: 'https://public.cdn.opus.pro/assets/editor_new.riv',
    stateMachines: 'State Machine 1',
    artboard: 'Artboard',
    autoplay: true,
  });

  return (
    <div className="w-full h-[600px] flex items-center justify-center">
      <RiveComponent className="w-full h-full object-contain" />
    </div>
  );
}

export default function AIEditor() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-32 overflow-hidden bg-background">
      <div className="padding-global">
        <div className="container-1200">
          
          {/* Header */}
          <ScrollReveal className="flex flex-col items-center text-center mb-12 md:mb-16">
            <div className="flex items-center gap-2 text-[#999999] opacity-80 mb-4 md:mb-6 leading-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19" className="text-white opacity-80">
                <path fill="currentColor" opacity="0.5" d="M5.293 2.02a.18.18 0 0 1 .164 0c.06.03.1.136.183.344l.307.779a.4.4 0 0 0 .038.081q.016.024.04.041c.018.013.04.021.083.038l.777.307c.21.083.314.124.345.183a.18.18 0 0 1 0 .163c-.031.06-.135.101-.345.184l-.777.306c-.043.017-.065.026-.082.039a.2.2 0 0 0-.041.04.4.4 0 0 0-.038.082l-.307.778c-.083.21-.124.314-.183.345a.18.18 0 0 1-.164 0c-.059-.031-.1-.135-.183-.345l-.307-.778a.4.4 0 0 0-.038-.081.2.2 0 0 0-.04-.041.4.4 0 0 0-.082-.039l-.778-.306c-.21-.083-.314-.124-.345-.184a.18.18 0 0 1 0-.163c.03-.06.136-.1.345-.183l.778-.307a.4.4 0 0 0 .081-.038.2.2 0 0 0 .041-.041.4.4 0 0 0 .038-.081l.307-.779c.083-.209.124-.313.183-.344"></path>
                <path fill="currentColor" opacity="0.5" fillRule="evenodd" d="M11.375 3.502a2.92 2.92 0 0 1 4.018.103l.103.109a2.92 2.92 0 0 1-.103 4.017L7.73 15.393a2.92 2.92 0 0 1-4.017.103l-.109-.103a2.92 2.92 0 0 1 0-4.126l7.663-7.662zm-6.71 8.826a1.42 1.42 0 0 0 0 2.005l.107.096a1.42 1.42 0 0 0 1.897-.096l5.983-5.983-2.005-2.005zm9.667-7.663a1.42 1.42 0 0 0-1.897-.096l-.108.096-.618.619 2.004 2.004.619-.618c.519-.519.55-1.34.097-1.897z" clipRule="evenodd"></path>
                <path fill="currentColor" opacity="0.5" d="M13.902 11.774a.21.21 0 0 1 .196 0c.071.036.121.162.22.413l.369.934c.02.051.03.076.045.098q.02.029.049.05a.5.5 0 0 0 .097.045l.934.368c.251.1.377.149.414.22a.21.21 0 0 1 0 .196c-.037.071-.163.121-.414.22l-.934.369a.5.5 0 0 0-.097.045.2.2 0 0 0-.05.049.5.5 0 0 0-.044.097l-.369.934c-.099.251-.149.377-.22.414a.21.21 0 0 1-.196 0c-.071-.037-.12-.163-.22-.414l-.368-.934a.5.5 0 0 0-.046-.097.2.2 0 0 0-.05-.05.5.5 0 0 0-.097-.044l-.934-.369c-.25-.099-.377-.149-.413-.22a.21.21 0 0 1 0-.196c.037-.071.162-.12.414-.22l.933-.368c.051-.02.076-.03.098-.046a.2.2 0 0 0 .05-.05.5.5 0 0 0 .045-.097l.368-.934c.1-.25.149-.377.22-.413"></path>
              </svg>
              <span className="text-[12px] md:text-[14px] font-semibold tracking-[0.05em] uppercase text-[#fff] opacity-80 font-mono">
                AI editor
              </span>
            </div>
            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-4 md:mb-6 max-w-[800px]">
              AI that edits with you, not just for you
            </h2>
            <p className="text-[16px] md:text-[20px] leading-[1.6] text-[#A1A1AA] max-w-[700px]">
              Take full editing control, or let our AI take over. Either way, it's effortless.
            </p>
          </ScrollReveal>

          {/* Rive Visual Canvas */}
          <ScrollReveal delay={0.1}>
            <div className="w-full relative rounded-[32px] overflow-hidden bg-transparent border-none">
              {mounted ? (
                <EditorRiveAnimation />
              ) : (
                <div className="w-full h-[600px] bg-transparent animate-pulse rounded-[inherit]"></div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
