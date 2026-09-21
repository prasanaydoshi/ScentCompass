const intensityOrder={soft:0,medium:1,bold:2};
export function normalizePreferences(p={}){
 const list=x=>Array.isArray(x)?[...new Set(x.map(v=>String(v).trim().toLowerCase()).filter(Boolean))]:[];
 const country=['US','CA'].includes(p.country)?p.country:'US';
 return {country,currency:country==='CA'?'CAD':'USD',families:list(p.families),liked_notes:list(p.liked_notes),disliked_notes:list(p.disliked_notes),occasions:list(p.occasions),intensity:['soft','medium','bold'].includes(p.intensity)?p.intensity:'medium',budget:Number.isFinite(Number(p.budget))&&Number(p.budget)>=0?Number(p.budget):Infinity};
}
export function pricePerMl(offer){if(!offer||!Number.isFinite(offer.price)||!Number.isFinite(offer.size_ml)||offer.price<0||offer.size_ml<=0)throw Error('Invalid offer');return offer.price/offer.size_ml;}
function terms(product){return product.notes.map(x=>x.toLowerCase());}
export function hasExcludedNote(product,disliked){const notes=terms(product);return disliked.some(x=>notes.includes(x));}
export function rank(catalog,input){const p=normalizePreferences(input),offers=catalog.offers.filter(o=>o.country===p.country),out=[];
 for(const product of catalog.products){const productOffers=offers.filter(o=>o.product_id===product.id).map(o=>({...o,price_per_ml:pricePerMl(o)})).sort((a,b)=>a.price_per_ml-b.price_per_ml||a.price-b.price||a.id.localeCompare(b.id));const excluded=hasExcludedNote(product,p.disliked_notes);if(excluded||!productOffers.length)continue;
  const fam=product.families.map(x=>x.toLowerCase()),notes=terms(product),occs=product.occasions.map(x=>x.toLowerCase());const familyHits=p.families.filter(x=>fam.includes(x)),noteHits=p.liked_notes.filter(x=>notes.includes(x)),occasionHits=p.occasions.filter(x=>occs.includes(x));
  let score=20+Math.min(35,familyHits.length*35)+Math.min(25,noteHits.length*12.5)+Math.min(10,occasionHits.length*10);const d=Math.abs(intensityOrder[product.intensity]-intensityOrder[p.intensity]);score+=d===0?10:d===1?5:0;const affordable=productOffers.some(o=>o.price<=p.budget);if(Number.isFinite(p.budget))score+=affordable?5:-10;score=Math.max(0,Math.min(100,score));
  const reasons=[];if(familyHits.length)reasons.push('Matches '+familyHits.join(', ')+' family');if(noteHits.length)reasons.push('Includes liked '+noteHits.join(', '));if(occasionHits.length)reasons.push('Fits '+occasionHits.join(', '));if(d===0)reasons.push('Matches '+p.intensity+' intensity preference');if(!reasons.length)reasons.push('Broad catalog fallback; refine preferences');
  out.push({...product,score,reasons,offers:productOffers,affordable,best_offer:productOffers.find(o=>o.price<=p.budget)||productOffers[0]});
 }
 return out.sort((a,b)=>b.score-a.score||a.best_offer.price_per_ml-b.best_offer.price_per_ml||a.id.localeCompare(b.id));
}
export function compareOffers(offers){return [...offers].map(o=>({...o,price_per_ml:pricePerMl(o)})).sort((a,b)=>a.price_per_ml-b.price_per_ml||a.price-b.price||a.id.localeCompare(b.id));}
export function explainConcentration(c){return {"Eau de Toilette":"EDT and EDP are formulation labels; EDT is often lighter, but performance varies by fragrance and skin.","Eau de Parfum":"EDP is commonly more concentrated than EDT in the same line, but it may smell different and is not guaranteed to last longer.","Eau de Parfum Intense":"‘Intense’ is a brand formulation name, not a standardized strength or longevity guarantee."}[c]||'Concentration names do not guarantee performance.';}
