export default {
  '*.{ts,js}': ['oxfmt --write --ignore-path .oxfmtignore', 'eslint --fix'],
  '*.vue': ['eslint --fix', 'stylelint --fix'],
  '*.scss': ['stylelint --fix'],
  '*.{json,md,yml,yaml}': ['prettier --write'],
}
