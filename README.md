# AltheraCode website

The source of www.altheracode.com. It's built with Astro and hosted on Cloudflare Pages.

## How changes happen

**Text, case studies, FAQ, blog posts: Pages CMS** (app.pagescms.org → this repo)
1. Pick the `staging` branch at the top-left of Pages CMS.
2. Edit and click **Save**. After about a minute the change shows up on the staging preview address.
3. To publish, open a pull request from `staging` to `main` on GitHub and merge it. Or ask Claude to do it.

**Design, layout, new sections or pages: ask Claude**
1. Describe what you want, for example: "Add a Careers page with three open roles and link it in the footer."
2. Claude opens a pull request. Cloudflare posts a **preview link** on it after about a minute.
3. Check the preview on desktop and phone. If something's wrong, tell Claude what to fix on the same pull request.
4. When it looks right, click **Merge**. The live site updates in about a minute.

**Something broke after a merge?** Open the merged pull request on GitHub and click **Revert**. Then merge the revert.

Technical rules for Claude are in [CLAUDE.md](CLAUDE.md).
