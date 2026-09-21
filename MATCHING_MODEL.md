# Matching model

## Inputs and exclusions

Input normalization lowercases, trims and deduplicates list choices. Country is US or CA and selects native USD or CAD offers. Negative, missing or malformed budgets become unbounded. Exact disliked-note equality removes a product before scoring. Exact matching avoids pretending that “lemon” is necessarily identical to the catalog phrase “Sicilian lemon,” but it also means the user must select the catalog vocabulary. Note lists are incomplete marketing summaries; exclusions are not allergy protection.

## Score

- 20 points base, so a sparse profile still produces browsable fallbacks.
- 35 points for at least one exact family match.
- 12.5 points per liked-note match, capped at 25.
- 10 points for at least one occasion match.
- 10 points for exact intensity; 5 for adjacent intensity; 0 for two levels away.
- 5 points when at least one native-country bottle fits the budget; otherwise −10 when a finite budget is supplied.
- Clamp to 0–100. Sort descending score, then lowest price per mL, then stable product ID.

The UI states which factors matched. “Intensity” is a catalog editorial category, not measured projection. Concentration is displayed and explained but deliberately excluded from score; EDT, EDP and Intense names do not guarantee performance or comparable formulas.

## Offers

Price per mL is `listed one-time price / labeled volume in mL`. Comparison is only within offers for the selected country. No foreign-exchange conversion. Exclude sales requiring subscriptions, loyalty, bundles or coupons. Taxes, delivery, decanting risk and bottle design are not modeled. Offer timestamp means when the value was manually observed, not continuous monitoring.

## Validation boundary

Authored cases confirm intuitive, explainable outcomes for profiles targeting lavender/warm floral, coffee/gourmand, citrus/lemon, pear/fresh fruity and berry/floral. They test implementation contracts, not people. No user ratings, A/B tests, click outcomes, olfactory embeddings or ground-truth liking labels exist. Therefore, do not report precision, recall, NDCG or personalization accuracy.

Before production, expand verified coverage, collect consented preference feedback, separate exploration from validation, measure calibration and ranking quality, audit demographic/price accessibility, implement offer expiry and monitor link/stock drift.
