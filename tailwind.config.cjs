const colors = require('tailwindcss/colors');

const CUSTOM_COLORS = {
  engine: {
    50: '#fbf3f3',
    100: '#f8e7e6',
    200: '#edc2c2',
    300: '#e39e9d',
    400: '#cd5553',
    500: '#B80C09',
    600: '#a60b08',
    700: '#8a0907',
    800: '#6e0705',
    900: '#5a0604',
  },
  ice: {
    50: '#f2f9fd',
    100: '#e6f4fb',
    200: '#bfe3f5',
    300: '#99d1ee',
    400: '#4dafe2',
    500: '#008DD5',
    600: '#007fc0',
    700: '#006aa0',
    800: '#005580',
    900: '#004568',
  },
  clay: {
    50: '#f4f5f6',
    100: '#eaeaec',
    200: '#cacbd0',
    300: '#aaabb3',
    400: '#6b6c7b',
    500: '#2B2D42',
    600: '#27293b',
    700: '#202232',
    800: '#1a1b28',
    900: '#151620',
  },
  'orange-yellow': {
    50: '#fefbf2',
    100: '#fef8e6',
    200: '#fcedbf',
    300: '#fae299',
    400: '#f7cd4d',
    500: '#F3B700',
    600: '#dba500',
    700: '#b68900',
    800: '#926e00',
    900: '#775a00',
  },
  canvas: colors.neutral[50],
};

CUSTOM_COLORS['text'] = {
  tertiary: CUSTOM_COLORS.clay[700],
  secondary: CUSTOM_COLORS.clay[800],
  primary: CUSTOM_COLORS.clay[900],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        // xl: '1280px',
        // no 2xl
      },
    },
    extend: {
      colors: {
        ...CUSTOM_COLORS,
      },
      typography: {
        DEFAULT: {
          css: {
            color: CUSTOM_COLORS.text.primary,
            code: {
              background: colors.gray[200],
              padding: '2px 4px',
              borderRadius: '2px',
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
            },
            h1: {
              marginBottom: '.8em',
            },
            h2: {
              marginTop: '1em',
              marginBottom: '0.5em',
            },
            h3: {
              marginTop: '0.5em',
            },
            h4: {
              marginTop: '0.5em',
            },
            maxWidth: 'auto',
            '--tw-prose-body': CUSTOM_COLORS.text.primary,
            '--tw-prose-headings': colors.gray[900],
            '--tw-prose-lead': colors.zinc[600],
            '--tw-prose-links': CUSTOM_COLORS.ice[600],
            '--tw-prose-bold': colors.zinc[900],
            '--tw-prose-counters': colors.zinc[500],
            '--tw-prose-bullets': colors.zinc[700],
            '--tw-prose-hr': colors.zinc[200],
            '--tw-prose-quotes': colors.zinc[900],
            '--tw-prose-quote-borders': colors.zinc[200],
            '--tw-prose-captions': colors.zinc[500],
            '--tw-prose-code': colors.zinc[900],
            '--tw-prose-pre-code': colors.zinc[200],
            '--tw-prose-pre-bg': colors.zinc[800],
            '--tw-prose-th-borders': colors.zinc[300],
            '--tw-prose-td-borders': colors.zinc[200],
            '--tw-prose-invert-body': colors.zinc[300],
            '--tw-prose-invert-headings': colors.white,
            '--tw-prose-invert-lead': colors.zinc[400],
            '--tw-prose-invert-links': colors.white,
            '--tw-prose-invert-bold': colors.white,
            '--tw-prose-invert-counters': colors.zinc[400],
            '--tw-prose-invert-bullets': colors.zinc[600],
            '--tw-prose-invert-hr': colors.zinc[700],
            '--tw-prose-invert-quotes': colors.zinc[100],
            '--tw-prose-invert-quote-borders': colors.zinc[700],
            '--tw-prose-invert-captions': colors.zinc[400],
            '--tw-prose-invert-code': colors.white,
            '--tw-prose-invert-pre-code': colors.zinc[300],
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': colors.zinc[600],
            '--tw-prose-invert-td-borders': colors.zinc[700],
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
