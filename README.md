# DJ Annemiek

A one-page site for [djannemiek.com](https://djannemiek.com). Plain HTML, CSS, and a few lines of JavaScript. No framework, no build step, no backend. It can sit on GitHub Pages, Vercel, or any other static host.

`CNAME` contains `djannemiek.com`.

## Preview locally

From this folder:

```bash
python3 -m http.server 8741
```

Open [http://127.0.0.1:8741](http://127.0.0.1:8741).

## Update the dates

Dates live in `index.html`, inside the comment marked `DATES` (the list under “Valiant Lady”).

Copy an `<li class="gig">` block and edit the text. Add `is-highlight` for the brass double frame, and an optional `<p class="flag">` for a small label such as Highlight or Home. Only write dates that are confirmed.

## Update the booking email

The address is one constant, at the top of `js/site.js`:

```js
const BOOKING_EMAIL = 'booking@djannemiek.com';
```

Change that string and every booking link on the page follows it. Then rebuild the press kit so the zip’s contact file matches:

```bash
python3 scripts/build-press-kit.py
```

## Press kit

The page links to:

- short and long bios, plus `press/bios/biography.pdf`
- the booth portrait (`press/photos/booth-portrait.png`)
- gold and black logo PNGs (`press/logos/`)
- the zip, `press/dj-annemiek-press-kit.zip`

There is no photo gallery on the page. When new portraits are ready, add a `<figure class="shot">` inside the `PHOTOS` comment in `index.html`. The `.shot` and `.press-photos` styles are already there. Put a web-sized file in `assets/img/` and the original in `press/photos/`, then rebuild the zip.

The hero portrait stays in `assets/img/hero.jpg`. The only other photograph on the site is the booth portrait in the bio.

The Open Graph image is `assets/img/og.jpg` (portrait with the gold logo). Favicons are in `assets/img/`.

## House style

Near-black `#111111`, gold `#C9A35B`, cream `#E8D3A2`. Bebas Neue for headings, Montserrat for labels and body, Playfair Display italic for the tagline and dates. Loaded from Google Fonts.
