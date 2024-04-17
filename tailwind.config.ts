import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        // 👇 Add CSS variables
        inter: ['var(--font-inter)'],
        spaceGrotesk: ['var(--font-space-grotesk)'],
        lexend: ['var(--font-lexend)'],
        sans: ['var(--font-opensans)'],
        mono: ['var(--font-roboto-mono)'],
        anke: ['var(--font-anke)'],
        dingtalk: ['var(--font-dingtalk)'],
        kingsoft: ['var(--font-kingsoft)'],
        xinyiguanhei: ['var(--font-xinyiguanhei)'],
        alibaba: ['var(--font-alibaba)'],
      },
      aspectRatio: {
        '2/1': '2 / 1',
        '3/2': '3 / 2',
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        '9/16': '9 / 16',
        '1/2': '1 / 2',
        '2/3': '2 / 3',
        '3/4': '3 / 4',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
};
export default config;
