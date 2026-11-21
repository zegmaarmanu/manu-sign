# Manu Sign

Aangepaste versie van [Documenso](https://github.com/documenso/documenso) (AGPL-3.0) met de huisstijl van Zeg maar Manu.

- `make-assets.py` maakt favicons, e-maillogo en deelbeeld opnieuw (`python3 branding/make-assets.py`).
- Upstream bijwerken: `main` volgt Documenso; merge `main` in `manu-sign` en zoek daarna opnieuw op `\bDocumenso\b`
  in `apps/remix`, `packages` (ts, tsx, po) om nieuwe teksten te vervangen.
- Het image wordt gebouwd door `.github/workflows/manu-sign-image.yml` naar `ghcr.io/zegmaarmanu/manu-sign`.
