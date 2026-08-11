# Igorot Stone Kingdom — Gabay sa Baguio

Isang custom, single-page Astro site para sa Igorot Stone Kingdom sa Baguio. Filipino ang UI/content at ang visual system ay nakabatay sa stone terraces, pine-green highland palette at warm earth tones ng Cordillera landscape. Ang mga pangunahing attraction photos ay tunay na litrato at naka-save locally sa `public/images`.

## Stack at version pins

- Astro `7.2.0`
- Tailwind CSS `4.3.3` + `@tailwindcss/vite` `4.3.3`
- TypeScript `6.0.3`
- `@astrojs/check` `0.9.10` — peer range nito ay sumusuporta sa TypeScript 6
- `@astrojs/sitemap` `3.7.3`
- pnpm `9.15.9` sa `packageManager` at `engines`
- Node.js `24.19.0` LTS sa `engines` at `.node-version`
- Cloudflare Wrangler `4.120.1` ay exact-pinned sa `deploy` script sa pamamagitan ng `pnpm dlx`

Walang database, login, CMS o server-side data dependency. Static ang Astro output at dine-deploy bilang Cloudflare Worker static assets.

## Domain: isang lugar lang ang babaguhin

Buksan ang `astro.config.mjs` at palitan lamang ang:

```js
const site = '';
```

Kapag may final domain na, ilagay ang mismong HTTPS origin sa value na ito at huwag nang magdagdag ng hiwalay na base URL sa ibang file.

Kapag walang domain, normal pa ring nagbu-build ang site: hindi nilalabas ang absolute canonical / `og:url` / absolute OG image URL at hindi ine-enable ang sitemap integration. Kapag may `site`, lahat ng absolute page/image URL ay dini-derive mula sa `Astro.site`, at ang sitemap ay awtomatikong ginagawa ng `@astrojs/sitemap`.

## Local development

```bash
corepack enable
corepack prepare pnpm@9.15.9 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

## Build at Cloudflare Worker deploy

```bash
pnpm check
pnpm build
pnpm deploy
```

Ang `wrangler.jsonc` ay assets-only Worker config na nagtuturo sa `./dist`; walang Astro server adapter na kailangan para sa static output na ito.

## Required clean-environment check

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
grep -RniE 'example\.com|localhost|chrome-extension://' dist || true
```

Kung blank ang `site`, inaasahang walang `sitemap-*.xml` sa `dist`. Kapag may final `site`, ang sitemap ay dapat manggaling lamang sa `@astrojs/sitemap`; huwag gumawa ng manual `<url>` list o fabricated `lastmod`.

## Analytics at external resources

GA4 measurement ID: `G-HXM22WWPKP`. Ang production HTML ay walang third-party scripts maliban sa opisyal na Google tag na ito. Google Maps embed lang ang ibang embedded external resource. Ang attraction photos, logo at favicon assets ay local.

## Larawan at lisensya

Tingnan ang `public/CREDITS.txt` para sa source at attribution ng Wikimedia Commons photos. CC BY-SA 4.0 ang ginamit na larawan at ang local copies ay ni-resize/ni-compress para sa web.

## Content note

Ang ticket, parking, opening hours at review score ay madaling magbago. Kaya may malinaw na visitor-facing caveat sa page at hindi ginagamit ang mga ito bilang “permanenteng” presyo o schedule. Ang site ay inilalarawan ang Stone Kingdom bilang modernong cultural theme attraction, hindi bilang sinaunang archaeological ruin.
