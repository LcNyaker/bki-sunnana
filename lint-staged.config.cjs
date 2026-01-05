/** @type {import('lint-staged').Config} */
module.exports = {
  "*.{js,ts,tsx}": () => "pnpm lint",
  "*.{css,scss}": "pnpm prettier --write",
};
