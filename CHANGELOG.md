# Changelog — Grass Valley Generators launch cleanup

Date: 24 November 2026 (America/Los_Angeles)

## Quiz option chosen

The quiz no longer invents a personalized dollar range. It still asks the same four questions (town, home size, what to keep on, fuel), then sends the visitor to the existing estimate form with those answers filled in. The result step shows only the sourced local average, $13,000 to $16,000, as planning context — not a quote.

Why this option: the other choice was to make the range actually change with the answers. The old multipliers and add-ons ($2,500 coverage add, 0.92–1.16 size multipliers, $1,200 tank add) were unsourced funnel placeholders. Publishing a changing dollar figure would invent prices, which the brief forbids. Replacing the calculated result with a request-a-free-estimate flow is the simpler option that stays inside that rule.

## Changes

1. Removed the entire "Preview notes, for Jordan" section and other internal copy (domain/promo details, research-trail language, "Preview build" footer, tenant-installer preview wording). Moved that material into `internal-notes.md`, which is not linked from the public site.
2. Removed the leftover 3 MB file `Grass Valley Generators site file.html` from the repo so it is no longer a public URL.
3. Reworded installer-implying "we" / "our in-home estimate" / "we will call you back" copy so the site reads as a lead service that connects homeowners with a licensed installer. Added a short disclosure on the homepage and in the site footer. No contractor is named.
4. Replaced "we never share your details" with honest wording: details are shared with the licensed installer who handles the request.
5. Lead form still uses free Web3Forms. The access key and the phone placeholder now live in one file, `js/site-config.js`. The header/call button stays hidden until `GVG_CONFIG.PHONE` is set to a real number. Telephone is omitted from schema until then.
6. Added dedicated pages, each with its own title, description, H1, canonical, and content, and linked them from the main nav and footer:
   - `/nevada-city/`
   - `/generator-service/`
   - `/penn-valley/`
   - `/lake-wildwood/`
   - `/alta-sierra/`
   The homepage remains Grass Valley at `/`, with the existing title and H1 keyword focus kept.
7. Updated schema.org JSON-LD to match the visible lead-service copy. No review or rating markup. No street address. Geo coordinates were dropped so the markup does not imply a storefront pin. No telephone property.
8. `sitemap.xml` now lists every public page. `robots.txt` allows all public pages (it only disallows this changelog and `internal-notes.md`). `llms.txt` is a plain-text summary of the lead service, the towns, and the sourced facts. No Google Business Profile mention on any public file.
9. Shared CSS and JS were moved to `/css/site.css` and `/js/site.js`. Visual design and layout are otherwise unchanged.

## Homepage title and description

Unchanged from the earlier trim (kept for SEO):

- Title: Whole House Generators Grass Valley CA | Cost, Installation & Service
- Description: Whole house generator installation, cost and service in Grass Valley CA, Nevada City, Penn Valley, Lake Wildwood & Alta Sierra. Installed cost $13,000–$16,000.

## Blocked

- A true 404 for `/internal-notes.md` and `/CHANGELOG.md` requires setting the Render service Publish Directory to `public` (and moving public files into that folder), or a build command that copies only public files into the publish directory. The connected Render tools cannot change `publishPath` or `buildCommand`. Until that Dashboard change, those two markdown files may be reachable if someone knows the exact URL. They are not linked from the site, and `robots.txt` disallows them.
- Security headers on the custom domain still have to be added in the Render or Cloudflare Dashboard. That was already reported and is unchanged.
- The call button cannot be enabled until a real tracking number is provided.
- Form notification inbox: the current Web3Forms key is the one already on the site. Changing the destination address requires a new free key from the site owner.
