import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ved Chem Corporation | Premium Chemical Solutions',
  description: 'Ved Chem Corporation supplies vitamins, mineral salts, amino acids, antibiotics, chelated minerals and speciality chemicals from India.'
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
