# Your personal site — starter

Two files: `index.html` (content) and `style.css` (looks). No build step, no
dependencies — just plain HTML/CSS, so it's easy to edit and hard to break.

## 1. Customize

Open `index.html` in any text editor (VS Code, Notepad, TextEdit — anything
works). Search for `[edit:` and `EDIT:` — every one marks something to
replace: your name, tagline, bio, project links, writing links, and contact
info. Delete any section you don't want (e.g. if you don't have projects yet,
just delete that `<section>` block and its nav link).

Open `index.html` directly in your browser (double-click it) any time to
preview changes locally before deploying.

## 2. Deploy for free with GitHub Pages

No cost, no credit card. You'll need a free GitHub account
(https://github.com/join if you don't have one).

1. Go to https://github.com/new and create a new repository.
   - Name it `yourusername.github.io` (replace with your actual GitHub
     username, exactly) — this specific name makes GitHub host it at that
     URL automatically.
   - Keep it Public. Don't add a README (you already have one).
2. Upload your files: on the new repo's page, click **"uploading an existing
   file"** and drag in `index.html` and `style.css`. Commit the changes.
3. Go to the repo's **Settings → Pages**. Under "Build and deployment",
   Source should be "Deploy from a branch", branch `main`, folder `/root`.
   Save.
4. Wait about a minute, then visit `https://yourusername.github.io` — your
   site is live.

Any time you want to update content, edit the file on GitHub directly (click
the pencil icon) or re-upload it — the live site updates automatically
within a minute or two.

### Optional: custom domain
If you later want `yourname.com` instead of `yourusername.github.io`, buy a
domain from any registrar (Namecheap, Porkbun, etc. — usually $10–15/year),
then follow GitHub's guide to point it at your Pages site:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
This part isn't free, but it's entirely optional — the `.github.io` address
works fine on its own.

## 3. About the blog section

Right now "Writing" is just a plain list of links you fill in by hand. If
you'd rather:
- point it at an existing Substack/Medium (like Nina's site does), just
  link out to your posts there — nothing else to build.
- write posts directly on this site instead, that needs a bit more
  structure (a posts folder + template) — happy to set that up if you want
  it later.
