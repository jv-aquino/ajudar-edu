import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unvoid Chess Game',
  description: 'A custom chess-like game.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
