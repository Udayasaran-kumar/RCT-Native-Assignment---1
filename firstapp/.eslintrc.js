// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["plugin:sonarjs/recommended-legacy", "expo"],
  plugins: ["sonarjs"],
  ignorePatterns: ["/dist/*"],
};
