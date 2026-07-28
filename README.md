# Determined Primary School — website

A small, static marketing site for Determined Primary School in
Maramba, Livingstone, Zambia. Plain HTML, CSS, and vanilla JavaScript —
no build step, no framework, no server required.

## What's here

```
index.html          Home
about.html           About the school
our-story.html       Loveness's story
academics.html       Academics
admissions.html      Admissions info
apply.html           Application form (opens WhatsApp)
gallery.html         Photo gallery with lightbox
donate.html          How to give
contact.html         Contact details + contact form (opens WhatsApp)
css/style.css        All styling
js/main.js           Nav toggle, lightbox, WhatsApp forms, scroll fade-ins
images/              Placeholder photos — see images/README.md
favicon.svg
sitemap.xml
robots.txt
```

## Before you publish: fill in the placeholders

The site uses `{{TOKENS}}` in a few places for information that wasn't
confirmed yet. Find-and-replace every one of these, across **all**
files (a code editor's "Find in Files" or a command like `grep -rl
"{{EMAIL}}" .` will find them all):

| Token | What it is | Appears in |
|---|---|---|
| `{{EMAIL}}` | The school's contact email address | `contact.html`, every page footer |
| `{{BANK_NAME}}` | Name of the bank | `donate.html` |
| `{{BANK_ACCOUNT_NAME}}` | Account holder name | `donate.html` |
| `{{BANK_ACCOUNT_NUMBER}}` | Account number | `donate.html` |
| `{{BANK_BRANCH_SWIFT}}` | Branch code / SWIFT code | `donate.html` |
| `{{MOBILE_MONEY_MTN}}` | MTN Mobile Money number | `donate.html` |
| `{{MOBILE_MONEY_AIRTEL}}` | Airtel Money number | `donate.html` |
| `{{SITE_URL}}` | The live web address once you have one, e.g. `https://determinedprimary.org` (no trailing slash) | Every page's `<link rel="canonical">` and Open Graph tags, `sitemap.xml`, `robots.txt` |

The school's phone/WhatsApp number (`+260 97 540 1997`) is already
hardcoded everywhere it's needed — no placeholder to fill in there.

## Swapping in real photos

See `images/README.md` for the full list of filenames, recommended
dimensions, and target file sizes. Short version: replace each
placeholder file with a real photo **using the exact same filename**,
and everything updates automatically.

## Deploying

### Option A — Netlify (drag and drop, easiest)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole site folder (the one containing `index.html`) onto
   the page.
3. Netlify gives you a live URL immediately (something like
   `random-name-123.netlify.app`). You can rename it or connect a
   custom domain from the site settings.
4. Once you have your final URL, come back and set `{{SITE_URL}}`
   everywhere (see table above), then re-deploy by dragging the folder
   again.

### Option B — GitHub Pages

1. Create a new GitHub repository and upload all the files in this
   folder to it (keeping the folder structure intact).
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a
   branch", pick your main branch and the `/ (root)` folder, then save.
4. GitHub will publish the site at
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`. Use that as your
   `{{SITE_URL}}` (again, no trailing slash), update the placeholders,
   and push the change.

Either option works with just these static files — no npm install, no
build command, nothing to configure beyond what's above.

## How the forms work

There's no backend. Both the application form (`apply.html`) and the
contact form (`contact.html`) validate the required fields in the
browser, then open WhatsApp in a new tab with a pre-filled message
containing everything the visitor typed. The visitor just needs to
press send in WhatsApp to complete it. If a visitor's browser blocks
the new tab, the page shows the school's WhatsApp number as a
fallback.

## A note on content

All factual content (student numbers, founding story, teacher count,
approach to learning) comes directly from the school profile document
provided. Nothing was invented. Anywhere information wasn't available —
exact fees, bank details, mobile money numbers, an email address — the
placeholder tokens above are used instead of guessed figures.

---

## Things to go collect from the school

A few things were deliberately left as placeholders or assumptions, so
you can confirm them directly with the school before going live:

1. **Email address** — the school's contact email, if it has one.
2. **Bank account details** — bank name, account name, account number,
   and branch/SWIFT code for international transfers.
3. **Mobile money numbers** — separate MTN and Airtel numbers for
   receiving donations (these may be the same as the WhatsApp number,
   or different — worth checking with the school).
4. **Office hours** — the site currently says "school days, mornings"
   in general terms, since no specific hours were in the source
   material. Replace with exact hours if you have them.
5. **Real photos** — every image on the site is currently a generated
   placeholder. See `images/README.md` to swap in real photos of the
   school.
6. **Final domain name / `{{SITE_URL}}`** — needed for SEO tags,
   sitemap, and robots.txt once you've chosen a host and (optionally) a
   custom domain.
