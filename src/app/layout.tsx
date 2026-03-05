import type { Metadata } from 'next'; // This is the "Type" I mentioned
import './globals.css';

export const metadata: Metadata = {
  title: 'Hired | Your Career Starts Here',
  description: 'The ultimate platform for finding your next gig.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}