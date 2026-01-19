import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  plugins: [tailwindcssAnimate, typography],

  safelist: [
    // background colors (CMS-driven)
    'bg-black',
    'bg-white',
    'bg-primary-500',
    'bg-secondary-500',
    'bg-tertiary-500',

    // text colors
    'text-black',
    'text-white',

    // button hovers
    'hover:bg-primary-600',
    'hover:bg-secondary-600',
    'hover:bg-tertiary-600',
    'hover:bg-neutral-800',
    'hover:bg-neutral-100',
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
      screens: {
        xs: '24rem', // 384px – very small phones
        sm: '40rem', // 640px – phones
        md: '48rem', // 768px – tablets
        lg: '64rem', // 1024px – laptops
        xl: '80rem', // 1280px – desktop (IMPORTANT)
        '2xl': '96rem', // 1536px – large desktop
        '3xl': '120rem', // 1920px – wide screens
      },
    },

    extend: {
      screens: {
        xs: '24rem', // 384px – very small phones
      },
      colors: {
        /* ---------- Base ---------- */
        black: 'var(--black)',
        white: 'var(--white)',

        /* ---------- Neutral ---------- */
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
          950: 'var(--neutral-950)',
        },

        /* ---------- Primary ---------- */
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)', // ⭐ main
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          950: 'var(--primary-950)',
        },

        /* ---------- Secondary ---------- */
        secondary: {
          50: 'var(--secondary-50)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
          950: 'var(--secondary-950)',
        },

        /* ---------- Tertiary ---------- */
        tertiary: {
          50: 'var(--tertiary-50)',
          100: 'var(--tertiary-100)',
          200: 'var(--tertiary-200)',
          300: 'var(--tertiary-300)',
          400: 'var(--tertiary-400)',
          500: 'var(--tertiary-500)',
          600: 'var(--tertiary-600)',
          700: 'var(--tertiary-700)',
          800: 'var(--tertiary-800)',
          900: 'var(--tertiary-900)',
          950: 'var(--tertiary-950)',
        },

        /* ---------- Brand ---------- */
        brand: {
          dark: 'var(--brand-dark)',
          blue: {
            200: 'var(--brand-blue-200)',
            500: 'var(--brand-blue-500)',
            700: 'var(--brand-blue-700)',
          },
          green: {
            200: 'var(--brand-green-200)',
            500: 'var(--brand-green-500)',
            700: 'var(--brand-green-700)',
          },
        },

        /* ---------- Status ---------- */
        success: {
          500: 'var(--success-500)',
        },
        warning: {
          500: 'var(--warning-500)',
        },
        error: {
          500: 'var(--error-500)',
        },
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },

      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
}

export default config
