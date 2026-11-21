import type { SVGAttributes } from 'react';

import { ManuSignMark } from './branding-logo-icon';

export type LogoProps = SVGAttributes<SVGSVGElement>;

/** Manu Sign-logo: icoon plus naam in Space Grotesk; de naam volgt de tekstkleur (licht en donker thema). */
export const BrandingLogo = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 64" role="img" aria-label="Manu Sign" {...props}>
      <ManuSignMark />
      <text
        x="78"
        y="47"
        fill="currentColor"
        fontFamily="'Space Grotesk', 'Helvetica Neue', Arial, sans-serif"
        fontSize="44"
        fontWeight="700"
      >
        Manu Sign
      </text>
    </svg>
  );
};
