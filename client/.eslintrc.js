module.exports = {
  parser: 'babel-eslint',
  //https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md
  extends: 'standard',
  plugins: [
    "react"
  ],
  env: {
    browser: true,
    es6: true
  },
  ecmaFeatures: {
    jsx: true,
    module: true
  },
  rules: {
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2
  }
}
