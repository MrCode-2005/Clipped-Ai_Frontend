import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#09090b',
          primary: '#ffffff',
          secondary: '#18181b',
          card: '#111113',
          'card-hover': '#1a1a1e',
        },
        foreground: '#ffffff',
        text: {
          primary: '#ffffff',
          secondary: '#a1a1aa',
          muted: '#71717a',
          tertiary: '#52525b',
        },
        accent: {
          blue: '#6723ff',
          'blue-light': '#6723ffcc',
          gold: '#d4a853',
          green: '#22c55e',
        },
        border: {
          DEFAULT: '#27272a',
          light: '#3f3f46',
          card: '#27272a',
        },
        ui: {
          'button-tonal': '#27272a',
          'button-primary': '#ffffff',
          'button-outline': '#3f3f46',
        },
        white: {
          DEFAULT: '#ffffff',
          f7: '#f7f7f7',
          e8: '#e8e8e8',
        },
      },
      fontFamily: {
        geist: ['GeistVF', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        oswald: ['Oswald', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
        'label-lg': ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.08em', fontWeight: '600' }],
        'label-md': ['0.75rem', { lineHeight: '1.25', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '68': '17rem',
        '76': '19rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '100': '25rem',
        '120': '30rem',
      },
      maxWidth: {
        '1200': '75rem',
        '1400': '87.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(180deg, transparent 0%, #09090b 100%)',
        'gradient-card': 'linear-gradient(180deg, #18181b 0%, #09090b 100%)',
        'gradient-blue-glow': 'radial-gradient(circle at center, #6723ff33 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 8px #6723ff33',
        'glow-md': '0 0 16px #6723ff44',
        'glow-lg': '0 0 32px #6723ff44',
        'card': '0 1px 2px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.5)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
};

export default config;
