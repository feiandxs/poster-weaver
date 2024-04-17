import { siteInfo } from '@/constants/site-info';
import type { Metadata } from 'next';
import './globals.css';

import {
  inter,
  spaceGroteskFont,
  lexend,
  dingTalkFont,
  kingsoftFont,
  xinYiGuanHeiFont,
  alibabaFont,
  openSans,
  robotoMono,
  ankeLatin,
} from '@/utils/font';

export const metadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable}${spaceGroteskFont.variable}${lexend.variable}${dingTalkFont.variable}${kingsoftFont.variable}${xinYiGuanHeiFont.variable}${alibabaFont.variable}${openSans.variable}${robotoMono.variable}${ankeLatin.variable}`}>
        {children}
      </body>
    </html>
  );
}
