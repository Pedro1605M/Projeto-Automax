import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Automax | Rezultz Gamification',
  description: 'Dashboard Conceitual de Gamificação',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0f1115] text-white min-h-screen font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
