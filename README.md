# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c34db193-9557-4e14-9345-7d28a5f93836

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c34db193-9557-4e14-9345-7d28a5f93836) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c34db193-9557-4e14-9345-7d28a5f93836) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Deploying this project (Netlify / Vercel / GitHub Pages)

This project is a standard Vite + React app. The default build output is the `dist/` folder.

Common hosting options and quick steps:

- Netlify (recommended for simplicity)
	1. Push your repo to GitHub/GitLab/Bitbucket.
	2. In Netlify, click "New site from Git" and connect your repo.
	3. Set the build command to `npm run build` and the publish directory to `dist`.
	4. (Optional) Add a `_redirects` or `netlify.toml` for SPA routing (this repo includes `netlify.toml`).

- Vercel
	1. Push your repo to GitHub/GitLab/Bitbucket.
	2. Import the project in Vercel and select the repo.
	3. Set the build command to `npm run build` and the output directory to `dist` (Vercel auto-detects Vite in most cases).
	4. This repo includes a `vercel.json` for static-build configuration.

- GitHub Pages
	- Option A (recommended if you want to keep things simple): Use Netlify or Vercel instead.
	- Option B: Build locally and push `dist/` to the `gh-pages` branch using a tool like `gh-pages` or a GitHub Actions workflow. Example using `gh-pages`:

		```sh
		npm run build
		npx gh-pages -d dist
		```

Notes:
- If you deploy to a subpath (e.g. GitHub Pages under `/REPO_NAME/`), set the Vite `base` option in `vite.config.ts` or run `vite build --base "/your-subpath/"`.
- SPA routing: ensure your host rewrites all 404s to `index.html` (Netlify `netlify.toml` or `_redirects`, Vercel routes, or GitHub Pages `404.html` rewrite).

Files added to help deployment:

- `netlify.toml` — Netlify build & redirect config (publishes `dist/`, SPA redirect).
- `vercel.json` — Vercel static-build config.

If you'd like, I can also add a GitHub Actions workflow that builds and deploys to GitHub Pages automatically, or create a `gh-pages` script in `package.json`. Tell me which provider you plan to use and I will wire it up.
