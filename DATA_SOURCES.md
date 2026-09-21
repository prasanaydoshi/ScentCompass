# Data and offer audit

Captured `2026-09-14T09:02:00Z`. Catalog version `2026-09-14-curated-v1`.

## Retail pages

- YSL Libre EDP, Ulta US: https://www.ulta.com/p/libre-eau-de-parfum-pimprod2008599?sku=2553366 — 90 mL, USD 185; lavender, orange blossom, musk, vanilla.
- YSL Libre EDP, Sephora Canada: https://www.sephora.com/ca/en/product/libre-eau-de-parfum-P448102 — 90 mL, CAD 230.
- YSL Black Opium EDP, Ulta US: https://www.ulta.com/p/black-opium-eau-de-parfum-pimprod2007110 — 90 mL, USD 174.
- YSL Black Opium EDP, Sephora Canada: https://www.sephora.com/ca/en/product/black-opium-P394534 — 90 mL, CAD 210; coffee, white flowers, vanilla.
- Marc Jacobs Daisy EDT, Ulta US: https://www.ulta.com/p/daisy-eau-de-toilette-VP12556?sku=2151611 — 100 mL, USD 146; wild berries, violet, jasmine, sandalwood.
- Dolce&Gabbana Light Blue EDT, Ulta US: https://www.ulta.com/p/light-blue-eau-de-toilette-pimprod2051153?sku=2636288 — 100 mL, USD 150; Sicilian lemon, cedarwood.
- Light Blue travel size, Ulta US: https://www.ulta.com/p/light-blue-eau-de-toilette-pimprod2051153?sku=2636291 — 10 mL, USD 38.
- Burberry Her EDP, Ulta US: https://www.ulta.com/p/her-eau-de-parfum-pimprod2001011?sku=2534517 — 100 mL, USD 185; dark berries, jasmine, musk/amber.
- Burberry Her Elixir, Ulta US: https://www.ulta.com/p/her-elixir-de-parfum-pimprod2034780 — 100 mL, USD 192.
- Juliette Has a Gun Pear Inc., Kohl’s / Sephora: https://www.kohls.com/product/prd-5049770/juliette-has-a-gun-pear-inc.jsp — 100 mL, USD 150.

The repository stores short factual fields and links, not scraped page copies or product images. Offer status describes the page at capture and may now be stale. Product notes are selective retailer/brand descriptions; `Her Elixir` catalog notes are a simplified profile based on its listed berry/jasmine/vanilla/amber positioning and should be verified on the linked exact product page before buying.

## Cleaning rules

Normalize fluid-ounce labels to the retailer’s paired metric volume where available, rather than independently converting rounded ounces. Keep variants separate by exact concentration. Reject zero/negative size or price. Require unique product and offer IDs, HTTPS sources, an ISO capture timestamp, supported country/currency pairing and a valid product reference. `npm run validate` enforces these invariants.

## Coverage and licensing

Coverage is a purposive demo sample, not a market census. It overrepresents designer products, US retailers and full-size bottles. Retail links can disappear or redirect. Authenticity and fulfillment remain retailer responsibilities. Brand names and product facts are used for identification and comparison; no trademarks, retailer content or third-party data are licensed under this project’s MIT license. No affiliate tracking parameters are added.
