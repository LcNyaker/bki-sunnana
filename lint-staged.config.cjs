/** @type {import('lint-staged').Config} */
module.exports = {
  '*.{js,ts,tsx}': 'eslint --fix',
  '*.{css,scss}': 'prettier --write',
}
