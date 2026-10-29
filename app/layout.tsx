import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Medico — your health story, all together',
  description: 'Organise medical records, lab history and family health details in one thoughtful personal health space.',
  openGraph: {
    title: 'Medico — your health story, all together',
    description: 'A personal space for medical records, lab history and the people you care for.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
