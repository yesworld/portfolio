# Portfolio - yesworld.dev

[Site live demo](https://yesworld.github.io/portfolio/)

## How to run?
```
$ yarn install
$ yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### How I deployed the project on github?
1. Create a file config `vue.config.js` with the following code:
```javascript
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/'
}
```

2. Installed `gh-pages`
```javascript
yarn add gh-pages -D
```

3. Added the script to the package `package.json`
```javascript
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

## License

[MIT License](./LICENSE)

Copyright (c) @yesworld