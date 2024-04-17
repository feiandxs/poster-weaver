// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk, Lexend, Open_Sans, Roboto_Mono, Anek_Latin } from 'next/font/google';

import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const spaceGroteskFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
});

// Font files can be colocated inside of `app`
export const dingTalkFont = localFont({
  src: 'fonts/DingTalk JinBuTi.ttf',
  display: 'swap',
  variable: '--font-dingtalk',
});

export const kingsoftFont = localFont({
  src: 'fonts/Kingsoft_Cloud_Font.ttf',
  display: 'swap',
  variable: '--font-kingsoft',
});

export const xinYiGuanHeiFont = localFont({
  src: 'fonts/ZiTiQuanXinYiGuanHeiTi.ttf',
  display: 'swap',
  variable: '--font-xinyiguanhei',
});

export const alibabaFont = localFont({
  src: 'fonts/AlibabaPuHuiTi-3-55-Regular.ttf',
  display: 'swap',
  variable: '--font-alibaba',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  // 👇 Add variable to our object
  variable: '--font-opensans',
});

// 👇 Configure the object for our second font
export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

// 👇 Configure the object for our second font
export const ankeLatin = Anek_Latin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anke',
});
