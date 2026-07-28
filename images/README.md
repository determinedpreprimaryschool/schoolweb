# Images folder

Every image in this folder is a **placeholder** generated to the right
dimensions and aspect ratio, just so the site is never blank. Swap each
one out for a real photo of the same name, and the site will pick it up
automatically — nothing in the HTML needs to change.

## Recommended specs for every photo

- Format: JPG (or WebP if your host supports it)
- Aspect ratio: 4:3 (landscape)
- Target file size: **under 200KB each** — most site visitors are on
  mobile data in Zambia, so keep photos compressed. Use
  [squoosh.app](https://squoosh.app) or similar to resize/compress
  before uploading.
- Faces of children: only use photos you have permission to publish.

## Files to replace

| Filename | Used on | Recommended size |
|---|---|---|
| `hero-classroom.jpg` | Home page, welcome section | 1280x960px |
| `our-story-preview.jpg` | Home page, story preview | 1280x960px |
| `academics-preview.jpg` | Home page, academics preview | 1280x960px |
| `contact-preview.jpg` | Home page, contact preview | 1280x960px |
| `about-01.jpg`, `about-02.jpg` | About page | 1280x960px each |
| `our-story-hero.jpg` | Our Story page | 1280x960px |
| `academics-01.jpg`, `academics-02.jpg` | Academics page | 1280x960px each |
| `admissions-01.jpg` | Admissions page | 1280x960px |
| `gallery-01.jpg` through `gallery-12.jpg` | Home preview + Gallery page | 800x600px each |

## Gallery categories

The gallery page groups photos into four categories of three photos
each. If you'd like different groupings, edit the `<h2 class="gallery-category">`
labels and image order in `gallery.html` — the filenames themselves
don't need to match any category.

- Classrooms: `gallery-01.jpg`, `gallery-02.jpg`, `gallery-03.jpg`
- Learners: `gallery-04.jpg`, `gallery-05.jpg`, `gallery-06.jpg`
- Activities: `gallery-07.jpg`, `gallery-08.jpg`, `gallery-09.jpg`
- School grounds: `gallery-10.jpg`, `gallery-11.jpg`, `gallery-12.jpg`

## Alt text

Each `<img>` tag already has descriptive alt text written for the
*type* of photo (e.g. "Classroom at Determined Primary School"). If
your real photo shows something more specific, feel free to tighten
the alt text in the relevant `.html` file — it helps both accessibility
and search engines.
