import { Outlet } from 'react-router';

import { BrandingLogoIcon } from '~/components/general/branding-logo-icon';
import { PublicLegalLinks } from '~/components/general/public-legal-links';

const SOURCE_URL = 'https://github.com/zegmaarmanu/manu-sign';

export default function Layout() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fbf8f1] text-black lg:flex-row dark:bg-background dark:text-foreground">
      <section className="relative flex flex-col justify-between overflow-hidden bg-black px-6 py-8 text-white md:px-12 lg:w-[46%] lg:py-12">
        <div className="flex items-center gap-3">
          <BrandingLogoIcon className="h-11 w-11" />
          <span className="font-bold text-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Manu Sign
          </span>
        </div>

        <div className="mt-10 mb-6 max-w-md lg:my-0">
          <h1
            className="font-bold text-4xl leading-[1.05] md:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", textShadow: '3px 3px 0 #009fe2, 6px 6px 0 #e64310' }}
          >
            Let's get down to business.
          </h1>
          <p className="mt-5 text-lg text-white/80">
            Hier wordt een handdruk een handtekening. Contracten, offertes en partnerschappen, veilig zwart op wit.
          </p>
        </div>

        <address className="hidden text-sm text-white/50 not-italic leading-relaxed lg:block">
          ZegMaarManu BV · Pol De Montstraat 40, 1760 Roosdaal
          <br />
          BTW BE 0798.992.166 ·{' '}
          <a href="https://zegmaarmanu.be" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            zegmaarmanu.be
          </a>
        </address>

        <div aria-hidden className="absolute inset-x-0 bottom-0 flex flex-col">
          <span className="h-1.5 bg-[#ffec00]" />
          <span className="h-1.5 bg-[#e64310]" />
          <span className="h-1.5 bg-[#009fe2]" />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center justify-between px-4 py-10 md:p-12">
        <div className="flex w-full flex-1 items-center justify-center">
          <Outlet />
        </div>

        <footer className="mt-8 flex w-full flex-col items-center gap-2">
          <PublicLegalLinks />
          {/* AGPL: wie de dienst gebruikt, moet de broncode van deze aangepaste versie kunnen vinden. */}
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-xs hover:text-foreground hover:underline"
          >
            Broncode
          </a>
        </footer>
      </section>
    </main>
  );
}
