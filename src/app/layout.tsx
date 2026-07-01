import type { Metadata } from 'next';
import { Familjen_Grotesk } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Header } from '@/layout/header';
import { Footer } from '@/layout/footer';
import { DevisProvider } from '@/drawer/devis-provider';

const familjenGrotesk = Familjen_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-familjen-grotesk',
  display: 'swap',
});

// Geist via package officiel (non disponible dans next/font/google sur Next 14)
const geist = GeistSans; // variable: '--font-geist-sans'

export const metadata: Metadata = {
  metadataBase: new URL('https://piscines-wagner-mersch.vercel.app'),
  title: {
    default: 'Pisciniste à Mersch | Piscines Wagner',
    template: '%s | Piscines Wagner',
  },
  description:
    'Atelier Wagner à Mersch depuis 2009 : béton armé, coque, rénovation, abris, sécurité. 240 bassins livrés dans le Grand-Duché. Un seul interlocuteur, du devis à la mise en eau.',
  keywords: [
    'pisciniste Mersch',
    'piscine Luxembourg',
    'construction piscine béton',
    'rénovation piscine',
    'abri piscine',
    'sécurité piscine Luxembourg',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_LU',
    siteName: 'Piscines Wagner',
    title: 'Pisciniste à Mersch | Piscines Wagner',
    description:
      'Béton armé, coque, rénovation, abris, sécurité. 240 bassins livrés dans le Grand-Duché depuis 2009. Un seul interlocuteur, du devis à la mise en eau.',
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://piscines-wagner-mersch.vercel.app',
    name: 'Piscines Wagner',
    legalName: 'Piscines Wagner S.à r.l.',
    description:
      'Pisciniste à Mersch depuis 2009. Construction béton armé, coque, naturelle, rénovation, abris et sécurité de piscines au Grand-Duché de Luxembourg.',
    telephone: '+352327122',
    email: 'contact@piscines-wagner.lu',
    url: 'https://piscines-wagner-mersch.vercel.app',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zone artisanale, route de Colmar-Berg',
      postalCode: 'L-7518',
      addressLocality: 'Mersch',
      addressCountry: 'LU',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 49.7543, longitude: 6.1086 },
    areaServed: 'Grand-Duché de Luxembourg',
    foundingDate: '2009',
    priceRange: '$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <html lang="fr" className={`${familjenGrotesk.variable} ${geist.variable}`}>
      <body className="bg-neutral-50 text-neutral-900 font-body antialiased pb-[calc(60px+env(safe-area-inset-bottom))] lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <DevisProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </DevisProvider>
      </body>
    </html>
  );
}
