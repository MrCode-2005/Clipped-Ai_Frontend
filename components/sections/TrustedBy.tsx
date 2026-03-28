'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TRUSTED_BY_LOGOS } from '@/lib/constants';

const CREATORS = [
  { name: 'Jacksfilms', followers: '5.08M', platform: 'youtube', image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/67d9477f073dc0049e6a2c7c_Jacksfilms.avif' },
  { name: 'Mark Rober', followers: '65.9M', platform: 'youtube', image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/67e27fe94853d4a1a5b6308b_Mark%20Rober.avif' },
  { name: 'Grant Cardone', followers: '4.7M', platform: 'youtube', image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/64f5a1eba3b8835d0f8fc437_Grant%20Cardone.webp' },
  { name: 'Scott Galloway', followers: '192K', platform: 'youtube', image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/64f5a1eb90b0b3ec96b14542_Scott%20Galloway.webp' },
  { name: 'What If', followers: '7.9M', platform: 'youtube', image: 'https://yt3.googleusercontent.com/WP_MOFBiMTT1ZN-rDZ85RzxSu-JXwf1e-Dyz6MwUy2arqo2uotw-MH5EeaMCAOtMFblM52QO=s160-c-k-c0x00ffffff-no-rj' },
  { name: 'Logan Paul', followers: '23.6M', platform: 'youtube', image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/68ed8b7379190beff8600ae9_paul.webp' },
  { name: 'Jenny Hoyos', followers: '4M', platform: 'youtube', image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/668c6776f01b5af9b933530c_output.png' },
  { name: 'Linguamarina', followers: '8.52M', platform: 'youtube', image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/66b2aa757e55394356a09456_unnamed%20(4).jpg' },
  { name: 'Dhar Mann Studios', followers: '24.8M', platform: 'youtube', image: 'https://public.cdn.opus.pro/assets/podcasret_studio.png' },
];

const YouTubeIcon = () => (
  <svg aria-hidden="true" role="img" width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#0E1015"/>
    <path d="M12.0008 6.09763C13.9246 6.09763 14.1505 6.10621 14.9109 6.14051C15.6141 6.17196 15.9943 6.28916 16.2487 6.38922C16.586 6.52071 16.8262 6.67508 17.0777 6.92664C17.3293 7.17821 17.4865 7.41833 17.6152 7.75565C17.7124 8.01007 17.8324 8.39028 17.8639 9.0935C17.8982 9.85391 17.9067 10.0797 17.9067 12.0036C17.9067 13.9275 17.8982 14.1533 17.8639 14.9137C17.8324 15.617 17.7152 15.9972 17.6152 16.2516C17.4837 16.5889 17.3293 16.829 17.0777 17.0806C16.8262 17.3321 16.586 17.4894 16.2487 17.618C15.9943 17.7152 15.6141 17.8353 14.9109 17.8667C14.1505 17.901 13.9246 17.9096 12.0008 17.9096C10.0769 17.9096 9.85105 17.901 9.09065 17.8667C8.38742 17.8353 8.00722 17.7181 7.7528 17.618C7.41548 17.4865 7.17535 17.3321 6.92379 17.0806C6.67223 16.829 6.515 16.5889 6.38636 16.2516C6.28917 15.9972 6.1691 15.617 6.13766 14.9137C6.10335 14.1533 6.09478 13.9275 6.09478 12.0036C6.09478 10.0797 6.10335 9.85391 6.13766 9.0935C6.1691 8.39028 6.28631 8.01007 6.38636 7.75565C6.51786 7.41833 6.67223 7.17821 6.92379 6.92664C7.17535 6.67508 7.41548 6.51786 7.7528 6.38922C8.00722 6.29202 8.38742 6.17196 9.09065 6.14051C9.85105 6.10335 10.0797 6.09763 12.0008 6.09763ZM12.0008 4.7998C10.0454 4.7998 9.7996 4.80838 9.03062 4.84268C8.2645 4.87699 7.74136 4.99991 7.28398 5.17715C6.80944 5.3601 6.40923 5.6088 6.00902 6.00902C5.6088 6.40923 5.36296 6.8123 5.17715 7.28398C4.99991 7.74136 4.87699 8.26449 4.84268 9.03347C4.80838 9.79959 4.7998 10.0454 4.7998 12.0008C4.7998 13.9561 4.80838 14.2019 4.84268 14.9709C4.87699 15.737 4.99991 16.2602 5.17715 16.7204C5.3601 17.1949 5.6088 17.5951 6.00902 17.9954C6.40923 18.3956 6.8123 18.6414 7.28398 18.8272C7.74136 19.0045 8.2645 19.1274 9.03348 19.1617C9.80246 19.196 10.0454 19.2046 12.0036 19.2046C13.9618 19.2046 14.2048 19.196 14.9738 19.1617C15.7399 19.1274 16.263 19.0045 16.7233 18.8272C17.1978 18.6443 17.598 18.3956 17.9982 17.9954C18.3984 17.5951 18.6443 17.1921 18.8301 16.7204C19.0073 16.263 19.1303 15.7399 19.1646 14.9709C19.1989 14.2019 19.2074 13.9589 19.2074 12.0008C19.2074 10.0426 19.1989 9.79959 19.1646 9.03061C19.1303 8.26449 19.0073 7.74136 18.8301 7.28112C18.6471 6.80658 18.3984 6.40637 17.9982 6.00616C17.598 5.60595 17.1949 5.3601 16.7233 5.17429C16.2659 4.99705 15.7427 4.87413 14.9738 4.83983C14.2019 4.80838 13.9561 4.7998 12.0008 4.7998Z" fill="white"/>
    <path d="M12.0028 8.30469C9.96173 8.30469 8.30371 9.95985 8.30371 12.0038C8.30371 14.0477 9.95887 15.7029 12.0028 15.7029C14.0467 15.7029 15.7019 14.0477 15.7019 12.0038C15.7019 9.95985 14.0467 8.30469 12.0028 8.30469ZM12.0028 14.4022C10.6764 14.4022 9.60154 13.3273 9.60154 12.0009C9.60154 10.6745 10.6764 9.59966 12.0028 9.59966C13.3292 9.59966 14.4041 10.6745 14.4041 12.0009C14.4041 13.3273 13.3292 14.4022 12.0028 14.4022Z" fill="#0E1015"/>
    <path d="M15.8467 9.0196C16.3235 9.0196 16.71 8.63308 16.71 8.15628C16.71 7.67949 16.3235 7.29297 15.8467 7.29297C15.3699 7.29297 14.9834 7.67949 14.9834 8.15628C14.9834 8.63308 15.3699 9.0196 15.8467 9.0196Z" fill="#0E1015"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full rounded-full bg-[#0E1015]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6293 9.77123V9.77259C15.1105 9.93282 15.6565 10.0211 16.2307 10.0211V8.1275C15.6795 8.12886 15.1581 7.97131 14.7142 7.70183C14.269 7.43235 13.918 7.06093 13.6888 6.61895H11.7584V13.8213C11.7584 14.5422 11.2338 15.0664 10.5117 15.0664C9.79093 15.0664 9.215 14.4811 9.215 13.7669C9.215 13.0446 9.79093 12.4674 10.513 12.4674V10.5186C9.64801 10.5186 8.82583 10.8717 8.2144 11.4815C7.60162 12.0913 7.25684 12.9103 7.25684 13.7751C7.25684 14.6385 7.60162 15.4602 8.2144 16.0713C8.82583 16.6811 9.64665 17.0329 10.5117 17.0329C11.3753 17.0329 12.1975 16.6825 12.8089 16.0699C13.385 15.4955 13.708 14.7431 13.7161 13.9408V9.45892C14.0044 9.58385 14.3089 9.68977 14.6293 9.77123Z" fill="white"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full rounded-full bg-[#0E1015]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.71 16.29H14.85V12.98C14.85 12.19 14.83 11.18 13.74 11.18C12.63 11.18 12.46 12.05 12.46 12.92V16.29H10.6V9.4H12.38V10.34H12.41C12.66 9.87 13.26 9.27 14.2 9.27C16.1 9.27 16.71 10.51 16.71 12.14V16.29ZM8.24 8.54C7.63 8.54 7.15 8.05 7.15 7.45C7.15 6.84 7.64 6.36 8.24 6.36C8.82 6.36 9.32 6.84 9.32 7.45C9.32 8.05 8.84 8.54 8.24 8.54ZM9.17 16.29H7.31V9.4H9.17V16.29Z" fill="white"/>
  </svg>
);

export default function TrustedBy() {
  // Duplicate logos for seamless marquee
  const allLogos = [...TRUSTED_BY_LOGOS, ...TRUSTED_BY_LOGOS];

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="padding-global">
        <div className="container-1200 flex flex-col items-center justify-center">
          <p className="text-center text-[#999999] text-[13px] md:text-[14px] font-medium tracking-[0.05em] mb-4 md:mb-8">
            Used by 16M+ creators and businesses
          </p>

          {/* Creators Avatars Row */}
          <div className="flex flex-nowrap justify-between items-center gap-2 md:gap-[20px] lg:gap-14 w-full max-w-[1200px] mx-auto mb-12 overflow-x-auto lg:overflow-visible hide-scrollbar pb-2 md:pb-0 px-2 sm:px-4 md:px-0">
            {CREATORS.map((creator) => (
              <div key={creator.name} className="flex flex-col flex-shrink-0 items-center group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-[68px] md:h-[68px] lg:w-[80px] lg:h-[80px] mb-2 md:mb-3">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    fill
                    sizes="(max-width: 768px) 48px, (max-width: 1024px) 68px, 80px"
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 drop-shadow-md">
                    {creator.platform === 'youtube' && <YouTubeIcon />}
                    {creator.platform === 'tiktok' && <TikTokIcon />}
                    {creator.platform === 'linkedin' && <LinkedInIcon />}
                  </div>
                </div>
                <strong className="text-white text-[12px] md:text-[14px] font-semibold tracking-wide">{creator.name}</strong>
                <span className="text-[#A1A1AA] text-[11px] md:text-[12px] font-medium">{creator.followers}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-12 md:gap-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: { duration: 30, repeat: Infinity, ease: 'linear' },
          }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="shrink-0 flex items-center justify-center h-6 md:h-7 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={28}
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
