/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // 1. Colors
    colors: {
      // 1.0. Primary Colors
      'primary-900': 'var(--primary-900)',
      'primary-800': 'var(--primary-800)',
      'primary-700': 'var(--primary-700)',
      'primary-600': 'var(--primary-600)',
      'primary-500': 'var(--primary-500)',
      'primary-400': 'var(--primary-400)',
      'primary-300': 'var(--primary-300)',
      'primary-200': 'var(--primary-200)',
      'primary-100': 'var(--primary-100)',

      // 1.1. Secondary Colors
      'secondary-900': 'var(--secondary-900)',
      'secondary-800': 'var(--secondary-800)',
      'secondary-700': 'var(--secondary-700)',
      'secondary-600': 'var(--secondary-600)',
      'secondary-500': 'var(--secondary-500)',
      'secondary-400': 'var(--secondary-400)',
      'secondary-300': 'var(--secondary-300)',
      'secondary-200': 'var(--secondary-200)',
      'secondary-100': 'var(--secondary-100)',
      // 1.2. Neutral colors
      'neutral-900': 'var(--neutral-900)',
      'neutral-800': 'var(--neutral-800)',
      'neutral-700': 'var(--neutral-700)',
      'neutral-600': 'var(--neutral-600)',
      'neutral-500': 'var(--neutral-500)',
      'neutral-400': 'var(--neutral-400)',
      'neutral-300': 'var(--neutral-300)',
      'neutral-200': 'var(--neutral-200)',
      'neutral-100': 'var(--neutral-100)',
      //1.3. Error Colors
      'error-900': 'var(--error-900)',
      'error-800': 'var(--error-800)',
      'error-700': 'var(--error-700)',
      'error-600': 'var(--error-600)',
      'error-500': 'var(--error-500)',
      'error-400': 'var(--error-400)',
      'error-300': 'var(--error-300)',
      'error-200': 'var(--error-200)',
      'error-100': 'var(--error-100)',
      //1.4. Warning Colors
      'warning-900': 'var(--warning-900)',
      'warning-500': 'var(--warning-500)',
      'warning-300': 'var(--warning-300)',
      'warning-100': 'var(--warning-100)',
      //1.5. Success Colors
      'success-900': 'var(--success-900)',
      'success-500': 'var(--success-500)',
      'success-300': 'var(--success-300)',
      'success-100': 'var(--success-100)',
    },
    // 2. Fonts
    fontSize: {
      h1: 'var(--h1)',
      h2: 'var(--h2)',
      h3: 'var(--h3)',
      h4: 'var(--h4)',
      h5: 'var(--h5)',
      h6: 'var(--h6)',
      p: 'var(--p)',
      s: 'var(--s)',
      vs: 'var(--vs)',
    },
    // 3. line height
    lineHeight: {
      h1: '72px',
      h2: '60px',
      h3: '52px',
      h4: '44px',
      h5: '32px',
      h6: '20px',
      p: '16px',
      s: '14px',
    },
    // 4. Font weights
    fontWeight: {
      regular: '400',
      'semi-bold': '600',
      bold: '800',
    },
    extend: {
      // 5. border width
      borderWidth: {
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },

      boxShadow: {
        main: '0px 4px 20px rgba(155, 155, 155, 0.1)',
      },

      // 6. border radius
      borderRadius: {
        4: '4px',
      },

      // 7. screen
      screens: {
        xxs: '480px',
        xs: '560px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
      // 8. spacing
      spacing: {
        60: '60px',
      },
    },
  },
  plugins: [],
  mode: 'jit',
};
