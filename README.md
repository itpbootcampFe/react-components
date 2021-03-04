# react-components

react components examples

[Live](https://itpbootcampfe.github.io/react-components)\

### gh-pages

- `yarn add -D gh-pages`
- then add to pakage.json :
  {
  ...
  script:{
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  },
  ...
  "homepage": "https://yourwebadress.com"
  }
- to deploy to github run `yarn deploy`
- go to github repo settings and select gh-page branch fror your github pages repo.
