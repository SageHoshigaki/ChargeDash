# ChargeDash

A single responsive React + TypeScript + Vite rental landing screen inspired by page 6 of the supplied ChargeDash hardware PDF. No kiosk enclosure or native app is included.

## Run

```sh
cd ~/Desktop/ChargeDash
npm install
npm run dev
```

Open the Local URL printed by Vite. Build with `npm run build`, run tests with `npm test`, and preview the production build with `npm run preview`.

## Scope

The rental, return, station search, and rate calculator open as dialogs within the one screen. All rental state is in memory and resets on refresh. No payments, geolocation, real station inventory, or hardware connections are implemented. Sample locations and pricing are labeled as demo content.

The $1 per 30-minute rate and cable messaging follow the reference concept, not verified operational terms. Final commercial pricing, connector compatibility, payment services, API contracts, and rental terms need confirmation before public launch.

## Design and assets

`public/products/` contains seven original 800 × 800 product images extracted from the user-supplied PDF and encoded as WebP. The screen uses a high-resolution AI-assisted product render referenced to the original black power bank and page 6 charging composition, without the kiosk enclosure. It is a marketing concept rather than a certified hardware photograph. The multicolor brand mark is a CSS approximation. DM Sans and Manrope load from Google Fonts with local sans-serif fallbacks. The product render was created using the built-in image-generation tool. See `ASSET-NOTES.md` for its prompt and source.

## Architecture

- `src/domain/rental.ts`: framework-independent pricing rules and demo station records; reusable in a future React Native app.
- `src/domain/rental.test.ts`: interval rounding and invalid-duration tests.
- `src/main.tsx`: web presentation and accessible native dialog interactions.
- `src/styles.css`: responsive screen, illustration, and component styles.

No native app has been created. Production deployment requires a backend, payment integration, hardware validation, and final brand assets; the production frontend bundle is generated in `dist/`.
