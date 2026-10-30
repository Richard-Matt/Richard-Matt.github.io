# Personal Portfolio

A Gazi-inspired (not copied) personal portfolio built with React and Vite, using a navy-and-mint palette, restrained transitions, responsive layouts, and no AI-generated or stock imagery.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Personalize the site

Most profile content is in `src/data/portfolio.js`:

- Update your name and university details.
- Add GitHub, LinkedIn and email links only when you are comfortable making them public.
- Add genuine project URLs and real screenshots.
- Update project descriptions and statuses as your work changes.

To add an authentic project screenshot, place it in `public/images/`, then set the relevant project's `image` field to a path such as `/images/nebula-dashboard.png` and write a useful `imageAlt` description. Leave `image` empty to use the CSS motif. The CSS motifs are decorative and are not presented as real screenshots.

Check every claim before publishing. The project intentionally avoids unverified awards, memberships, internships and certifications.

## Free public deployment with GitHub Pages

The included workflow builds the site and deploys it automatically when you push to `main`.

1. Create a **public** GitHub repository named exactly `YOUR-GITHUB-USERNAME.github.io`.
2. Upload/push the contents of this folder to the repository's `main` branch. Do not upload the outer folder as a nested folder; `package.json`, `index.html`, `src/` and `.github/` should be at the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and wait for the `Deploy portfolio to GitHub Pages` workflow to finish successfully.
6. Your site address will be `https://YOUR-GITHUB-USERNAME.github.io/`.

The repository must be public for the standard GitHub Free Pages workflow. GitHub Pages hosting is free for eligible public repositories. A custom domain is optional and not included.

## Update the site later

Edit the files, commit the changes to `main`, and push. GitHub Actions will build and publish the update automatically.

## Build locally

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Design notes

- The visual direction references the navy, slate and mint palette associated with Gazi Jarin's public portfolio.
- This project uses an independent implementation, original text, and an original SVG branching motif; it does not copy the reference site's source code, text, or artwork.
- Animations respect the user's reduced-motion setting.
