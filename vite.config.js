import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
//
// `base` is set to the repo name because this deploys to GitHub Pages at
// https://crislibjr.github.io/LELLAYPC/ rather than a domain root. If a
// custom domain is attached later (via a CNAME file in /public), change
// this back to '/' so asset URLs resolve correctly at the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/LELLAYPC/',
})
