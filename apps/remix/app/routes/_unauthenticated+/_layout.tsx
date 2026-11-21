import { Outlet } from 'react-router';

import { BrandingLogo } from '~/components/general/branding-logo';
import { PublicLegalLinks } from '~/components/general/public-legal-links';

const SOURCE_URL = 'https://github.com/zegmaarmanu/manu-sign';

export default function Layout() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black lg:flex-row">
      <section className="relative flex flex-col justify-between overflow-hidden border-black border-b-2 bg-white px-6 pt-8 pb-10 md:px-12 lg:w-[46%] lg:border-r-2 lg:border-b-0 lg:py-12">
        <div className="flex items-center gap-3">
          <BrandingLogo className="h-8 w-auto md:h-10" />
          <span
            className="rounded-md border-2 border-black px-2 py-0.5 font-bold text-sm uppercase tracking-wider"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Sign
          </span>
        </div>

        <div className="mt-10 mb-6 max-w-md lg:my-0">
          <h1
            className="font-bold text-4xl leading-[1.05] md:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", textShadow: '2px 2px 0 #ffec00, 4px 4px 0 #e64310, 6px 6px 0 #009fe2' }}
          >
            Let's get down to business.
          </h1>
          <p className="mt-5 text-lg text-neutral-700">
            Hier wordt een handdruk een handtekening. Contracten, offertes en partnerschappen, veilig zwart op wit.
          </p>
        </div>

        <address className="hidden text-neutral-500 text-sm not-italic leading-relaxed lg:block">
          ZegMaarManu BV · Pol De Montstraat 40, 1760 Roosdaal
          <br />
          BTW BE 0798.992.166 ·{' '}
          <a href="https://zegmaarmanu.be" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">
            zegmaarmanu.be
          </a>{' '}
          ·{' '}
          {/* AGPL: wie de dienst gebruikt, moet de broncode van deze aangepaste versie kunnen vinden. */}
          <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">
            broncode
          </a>
        </address>

        <div aria-hidden className="absolute inset-x-0 bottom-0 flex flex-col">
          <span className="h-1.5 bg-[#ffec00]" />
          <span className="h-1.5 bg-[#e64310]" />
          <span className="h-1.5 bg-[#009fe2]" />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center justify-between bg-white px-4 py-10 md:p-12">
        <div className="flex w-full flex-1 items-center justify-center">
          <Outlet />
        </div>

        <footer className="mt-8 flex w-full flex-col items-center gap-2">
          <PublicLegalLinks />
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-xs hover:text-foreground hover:underline lg:hidden"
          >
            Broncode
          </a>
        </footer>
      </section>
    </main>
  );
}
