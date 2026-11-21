import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

/** ZEGMAARMANU-logo (zelfde beeld als op zegmaarmanu.be); als SVG zodat bestaande hoogte-klassen blijven werken. */
export const BrandingLogo = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 539 84" role="img" aria-label="ZegMaarManu" {...props}>
      <image href="/brand/logo-zegmaarmanu.png" width="539" height="84" />
    </svg>
  );
};
