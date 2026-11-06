# Moksha — Developer Field Notes

An original personal portfolio with a warm notebook aesthetic, forest-green and terracotta colors, and an interactive secret terminal.

## Features

- About Me, Tech Superpowers, and Projects sections.
- Responsive layouts and keyboard-accessible navigation.
- Hidden terminal: follow the hint and click the notebook's `>_` button. Commands include `help`, `about`, `skills`, `projects`, `secret`, `roll`, `clear`, and `exit`. Arrow keys recall command history; Escape closes the terminal.
- Public portfolio source: https://github.com/moksha-17/moksha-field-notes
- AWS Amplify Hosting build configuration.

## Local preview

Requires Node.js 18+ and Python 3 for the example preview server. No npm packages are required.

```sh
npm run check
npm run build
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080.

## Deploy to AWS Amplify Hosting

1. Sign in to the AWS console and open Amplify Hosting.
2. Create a new app and select GitHub as the source provider.
3. Authorize the AWS Amplify GitHub integration for `moksha-17/moksha-field-notes`.
4. Select this repository and its `main` branch.
5. Keep the repository's `amplify.yml` configuration: check JavaScript, run `npm run build`, and publish `dist`.
6. Save and deploy. Once successful, open the HTTPS URL returned by Amplify.
7. Verify the sections, hidden terminal, and GitHub link on desktop and mobile. Submit the Amplify URL and this repository URL for the challenge.

Hosting deployment is pending; no live AWS URL has been verified. Review AWS billing information in your account before provisioning hosting.

Official references:
- https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html
- https://docs.aws.amazon.com/amplify/latest/userguide/yml-specification-syntax.html

## Project structure

- `public/index.html`: portfolio content and source links.
- `public/style.css`: design and mobile breakpoints.
- `public/app.js`: terminal interactions. Input is displayed as text, never evaluated.
- `scripts/build.mjs`: copies static assets into `dist`.
- `scripts/set-repository.mjs`: updates the portfolio-source link.
- `amplify.yml`: Amplify build configuration.

Google Fonts are optional; system fallbacks are included. Illustrations use original CSS. No backend, API keys, trackers, or form-data collection are required.

## Validation

JavaScript syntax and production build checks pass. Desktop browser checks verified terminal discovery, help, random roll, Escape closing, and focus restoration. Mobile CSS is included; mobile viewport testing remains to be completed. Project descriptions reflect the owner's supplied context.
