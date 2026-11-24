# Internal notes (not part of the public site)

These notes were moved off the public homepage on 24 November 2026 (America/Los_Angeles). They are the research trail and preview copy that used to live in the "Preview notes, for Jordan" section, plus later operational notes. Do not publish this file, link it from public pages, or mention a Google Business Profile on the live site.

**Deploy warning:** The Render static service (`srv-dc2ak2rm8hqs73ba0fqg`) currently uses Publish Directory `.` (the repo root). Until that is changed to `public` in the Render Dashboard, this file may be reachable at `https://grassvalleygenerators.com/internal-notes.md`. Changing the publish directory requires a Dashboard edit; the connected Render tools cannot set it. See CHANGELOG.md.

## Domain, on file

GrassValleyGenerators.com, registered at Spaceship on November 23, 2026, expiring November 23, 2027. Promo code COMPROS took the first year to $3.18. Renewal is $10.68 a year. Nothing else has been bought.

## Where each confirmed value came from

| Value used | Source |
| --- | --- |
| Average install $13,000 to $16,000 | Leading local Generac dealer's own published figures, carried in this project's market research |
| Install wait 8 to 10 weeks from prepayment | Same dealer's published timeline, same research |
| Nevada County 30.4% age 65 and over | County demographics in the earlier market research |
| About 2,137 customers in the October PG&E shutoff scope, 5,019 out at the November 18 peak | PG&E shutoff reporting in the earlier market research |
| Grass Valley 14,016, Nevada City 3,152 | 2020 census counts, as reported in this project's research conversation |
| No locally branded lead site in this market, national network first on 4 of 6 searches | Phase One teardown, November 23, 2026, report.md |
| High Sierra 3.9 stars (24 to 31 reviews depending on source), Precision Electric 5.0 from 9, Eric Rice 5.0 from 1 | Phase One teardown, figures labeled third-party and unverified in the report itself. Do not publish star ratings. |
| Two real estate listings in the top five for "whole house generator Nevada City" | Phase One teardown, Search 4 |

## Open questions, stated plainly

- **No search volume numbers exist yet.** Keyword Planner access was not available to the research, and no tool it used produced a trustworthy volume estimate. Whether Grass Valley is searched more than Nevada City is inferred from population and market structure, not measured. A Google Ads sign-in is still the one item that settles it.
- **The no-ads finding is a snapshot.** All six teardown searches returned no labeled sponsored placements at the top on November 23, 2026. Ad rotation varies by hour and searcher, so that is not proof nobody ever bids.
- **Review counts conflict across sources.** High Sierra shows 3.9 stars from 24 reviews in one listing, 3.9 from 30 on Birdeye, and 3.0 from 31 on MapQuest. The public site does not publish a star rating for any dealer for exactly that reason.
- **Ballpark math beyond the anchor is illustrative.** The original quiz adjusted the confirmed $13,000 to $16,000 average by home size, coverage and a propane tank set (coverage add $2,500, size multipliers 0.92–1.16, tank add $1,200). Those adjustments are unsourced funnel placeholders for a tenant installer to set, not researched prices. The live quiz no longer returns a personalized dollar range for that reason. It collects the same four answers and sends people to the estimate form, showing only the sourced $13,000–$16,000 average as context.
- **No tenant, no phone number, no timeline promise.** The public site carries no installer's name, phone or booking calendar, because no dealer has been signed. Phone is a single empty config value in `js/site-config.js` (`GVG_CONFIG.PHONE`). The call button stays hidden until that is set. Schema omits `telephone` until there is a real number.
- **Service plan pricing is open.** The research establishes that yearly maintenance is needed and underserved, but publishes no local plan price, so the public pages name no price.

## SEO and AI search optimization (from the preview build)

What was already baked into the original page:

- Keyword-mapped title, description and headings targeting whole house generator Grass Valley CA, generator cost, Generac dealer, generator service, plus Nevada City, Penn Valley, Lake Wildwood and Alta Sierra variants.
- Structured data (schema.org JSON-LD): LocalBusiness, FAQPage matching the visible FAQ, and a HowTo for the install steps. Updated on launch to describe a lead service, drop geo coordinates (so the markup does not imply a storefront pin), and omit telephone. Still no review or rating markup, and no street address.
- A Quick Answers block high on the homepage, short factual Q&A with the sourced numbers.
- Sizing guide (10–14 / 18–22 / 22–26 kW) with a Generac, Kohler and Cummins comparison, and a PG&E PSPS readiness checklist.
- Open Graph and Twitter cards, canonical URL set to grassvalleygenerators.com, robots directives allowing large image previews and full snippets. Below-fold photos use lazy loading.

## What else will move rankings fastest, in order (private; do not put this list on the site)

1. **Google Business Profile, claimed and completed.** For local searches this outranks the website itself; it is the map pack. Correct category (Electrician / Generator service), all five towns in the service area, real install photos, and the same name, domain and details everywhere. This is the single fastest lever and it is free. **Do not set this up, and do not mention a Google Business Profile anywhere on the public site, until Jordan asks.** Task 9 of the launch brief forbids it.
2. **Reviews, early and steady.** The teardown leaders sit at 3.9 stars from a few dozen reviews and 5.0 from single digits. Ten genuine local reviews with town names in them can beat both. Every install and service visit should end with a review ask. Do not invent or mark up reviews on the site.
3. **Search Console and Bing.** Submit `https://grassvalleygenerators.com/sitemap.xml`. (Sitemap, robots.txt and llms.txt now exist on the live host.)
4. **Town pages.** Nevada City, Penn Valley, Lake Wildwood, Alta Sierra, and generator service now have dedicated URLs. Nevada City was the softest search in the teardown and was built first.
5. **Local citations and links.** Consistent listings on Yelp, Angi, BBB, the Grass Valley and Nevada City chambers of commerce, and the Generac and Kohler dealer locators once a tenant dealer is signed.
6. **Publish on shutoff news.** When PG&E announces a PSPS scope for Nevada County, a short timely page update can catch search spikes.
7. **Keep the facts fresh.** The cost and wait numbers are dated November 2026.

Honest limit: no optimization guarantees a top spot or a timeline. What the teardown supports is narrower and still strong: this market's page one is a national network, directories and out-of-state dealers.

## What the teardown says the site has to beat

Position one on four of six searches is Charge Home Solutions, a national installer network with no local face and no local reviews. The rest of page one is call-routing lead generation, template location pages behind toll-free numbers, directories, general electricians, and in Nevada City, houses for sale and out-of-state dealers. The softest searches, in order, were "whole house generator Nevada City", "Generac dealer Nevada City", and "generator service Grass Valley".

An unsourced line from the old service section ("one local review describes a homeowner waiting months for a first service visit") was removed from the public site because review evidence was already flagged as conflicting and unverified. It is kept here only as a research note.

Public copy about Cummins being "the only certified option within 75 miles" was also moved here (directory listing from the teardown) and is not claimed on the live pages.

## Lead form

The homepage form posts to the free Web3Forms endpoint (`https://api.web3forms.com/submit`). The access key lives in one place: `js/site-config.js` as `GVG_CONFIG.WEB3FORMS_ACCESS_KEY`. Do not put a personal email address in public HTML. To change the notification inbox, create a free key at https://web3forms.com for the desired address and paste that key into `js/site-config.js`.
