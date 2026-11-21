import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

/** Manu Sign-icoon: zwart vlak met witte M en de verschoven drukkleuren van het zegmaarmanu-logo. */
export const BrandingLogoIcon = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
      <ManuSignMark />
    </svg>
  );
};

export const ManuSignMark = () => (
  <>
    <rect x="10" y="10" width="50" height="50" rx="6" fill="#ffec00" />
    <rect x="7" y="7" width="50" height="50" rx="6" fill="#e64310" />
    <rect x="4" y="4" width="50" height="50" rx="6" fill="#009fe2" />
    <rect x="1" y="1" width="50" height="50" rx="6" fill="#000" />
    <path d="M13 39V13h6.5L26 23l6.5-10H39v26h-6V23.5l-7 10-7-10V39z" fill="#fff" />
  </>
);
