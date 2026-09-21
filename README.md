# ScentCompass

An explainable fragrance finder and offer comparator. Configure families, notes, hard exclusions, occasion, intensity, budget and shopping country. ScentCompass ranks a small source-backed catalog, explains each score, normalizes recorded offers to price per mL and saves a shortlist locally.

## Run locally

```sh
git clone https://github.com/prasanaydoshi/ScentCompass.git
cd ScentCompass
python -m http.server 8000 --directory dist
```

Open http://localhost:8000. Direct `file://` access cannot fetch the catalog JSON. No account, API key, tracking, backend or purchase capability is included.

## What is real

The catalog contains seven real products and ten retailer offers manually captured September 14, 2026. Each product description and every offer links to its source. Prices use native retailer currency, exclude tax/shipping/subscriptions/coupons, and are snapshots—not live quotes. The app makes no purchase and has no affiliate relationship.

US coverage has seven products; Canadian coverage currently has two. That imbalance is shown rather than hidden through currency conversion or invented offers. The unbranded hero still-life is original AI-generated artwork and is not a product image.

## Matching engine

This is a deterministic decision engine, not a trained recommender. Exact disliked notes are hard exclusions. Remaining products receive transparent overlap points for family, liked notes, occasion and intensity, plus a small affordability adjustment. Offers never cross the selected country. Tie-breaking is deterministic. See [MATCHING_MODEL.md](MATCHING_MODEL.md).

The word “best” means highest match in this small catalog for the configured inputs. It does not mean objectively best perfume, a prediction of personal liking, the cheapest market offer, or verified current stock. Retailer note lists are selective descriptions, not full formulas or allergen advice. Always test on skin and verify the exact product, concentration, price and return policy.

## Verify

```sh
npm ci --ignore-scripts
npm run validate
npm test
```

The suite checks 21 engine contracts and nine DOM/WebMCP journeys: exclusions, country/currency isolation, unit prices, budget handling, deterministic ties, explanation bounds, known preference cases, loading errors, sorting, local shortlist and structured profile updates. These cases are authored behavioral contracts, **not real user preference measurements** or model-accuracy benchmarks.

## Structure

- `dist/catalog.json`: versioned catalog and timestamped offers.
- `dist/engine.js`: normalization, hard exclusions, scoring and price-per-mL comparison.
- `dist/app.js`: accessible interface, local shortlist and optional WebMCP tool.
- `tests/`: contract, DOM and provenance validation.
- `DATA_SOURCES.md`: exact coverage and evidence boundaries.

Original code and generated image are MIT licensed. Brand names, product descriptions, retailer pages and third-party data remain owned by their respective parties and are not relicensed. No affiliation or endorsement.
