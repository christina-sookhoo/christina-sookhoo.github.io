# Christina Sookhoo — personal portfolio

A lightweight, responsive website built with HTML, CSS, and a small amount of JavaScript. No paid hosting, build tools, plugins, or API keys are required.

## Publish on GitHub Pages

In this repository, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main**, choose **/(root)**, and save. GitHub will display the website URL after deployment. Do not enter a custom domain yet.

## Where to make changes

- `index.html`: homepage, project summaries, and brief experience.
- `about.html`: bio, capabilities, tools, industries, and brands.
- `experience.html`: fuller career and consulting background. The print button can save a PDF in your browser.
- `work/`: individual project stories.
- `food-notes.html`, `recipes.html`, `movement.html`, `pet-sitting.html`: personal pages.
- `assets/style.css`: colors, fonts, spacing, and responsive layouts.
- `assets/`: your portrait and illustrative supporting photographs.

On GitHub, open a file, choose **Edit**, change the text, and commit. Pages will publish changes automatically once enabled. For larger changes, work on a branch and preview before merging. Content repeated on different pages should be updated in both places.

## Adding blog posts later

The food and recipe pages are currently holding pages. When ready to publish, add a post page using the shared header, stylesheet, and footer, then link to it from the relevant category page. A simple writing dashboard or Markdown-based publishing system can be added later; none is configured now.

## Client anonymity

The two consulting clients are identified only as “Equipment company” and “Independent music artist.” Keep client names and confidential materials out of this public repository. Do not add passwords, access tokens, or private files.

## Photography

The portrait is Christina’s own image, used unchanged. Other photographs are illustrative placeholders; sources are listed on `credits.html`. They do not represent actual work samples or client testimonials.

## Domain, contact, and future changes

The site currently targets `https://christina-sookhoo.github.io/`. There is no custom domain configuration. Namecheap and the existing website are not changed. When connecting a domain later, update the sitemap, robots.txt, and social-sharing image URL too.

The contact buttons open email at `christina.sookhoo@yahoo.com`; there is no form service or tracking installed. Google Fonts supplies the typography, with local font fallbacks.

## Local preview

From this directory run `python3 -m http.server 8000` and open `http://localhost:8000/`.
