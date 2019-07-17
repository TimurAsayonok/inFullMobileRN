# iFM

### Installation

1. Install dependencies using `yarn`.
2. Go to `./iOS` and run `pod install`.
3. Use `yarn dev` to run the Metro bundler.
4. Use `yarn start:ios` or `yarn start:android` to run the app in the development mode.

### Requirements

Use RecipePuppy API to fetch and display recipes in the app.

> http://www.recipepuppy.com/about/api/

**Please use `cors-anywhere` to fetch data correctly, for instance:**

```js
fetch('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions&p=1', {
  headers: {
    'Content-Type': 'application/json',
    Origin: '',
  },
})
```

**Search**

- the app should contain search bar
- there should be a possibility to type more than 1 ingredient in the search bar (delimited by comma)

**List**

- display a placeholder if there are no results
- sort recipes by name (ascending)
- each recipe card should contain name and thumbnail
- pressing on recipe card should open a single recipe screen

**Recipe**

- display a recipe name, thumbnail and ingredients
- add a button for opening WWW page (use `href` property)
- there should be a possibility to go back to the recipes list

### Other

- we don't suggest how to write components, class/functional with HOCs/hooks/render props – the choice is yours!
- if you don't want to use TS in this project just change `allowJs` param to `true` in `./tsconfig.json` (or completely remove TS from the project dependencies)
- estimated time to complete the task is 4h but we don't use a stopwatch! ;P

Good luck! 🤗


### Tsimur Asayonak comments
**Added Libs**
- `lodash` - lib for working with arrays, strings and ect.
- `react-navigation` - lib for creating simple navigation in app (usually I prefer to use react-native-navigation which was developed by wix)
- additional lib for `react-navigation` (react-native-gesture-handler)
- `react-redux`, `redux`, `redux-logger`, `redux-thunk` - libs for Redux


**Checklist from Task**

**Search**

- ✅ the app should contain search bar
- ✅ there should be a possibility to type more than 1 ingredient in the search bar (delimited by comma)

**List**

- ✅ display a placeholder if there are no results
- ✅ sort recipes by name (ascending)
- ✅ each recipe card should contain name and thumbnail
- ✅ pressing on recipe card should open a single recipe screen

**Recipe**

- ✅ display a recipe name, thumbnail and ingredients
- ✅ add a button for opening WWW page (use `href` property)
- ✅ there should be a possibility to go back to the recipes list


**Checklist for work process**
- ✅ create folders sctructure of project
- ✅ add navigation, redux libs
- ✅ connect redux to app, connect notification lib to app
- ✅ create Components for main screens (Seacrh recipes and recipe information screen)
- ✅ create action for getting data from server
- ✅ connect app state and dispatch methods to screens
- ✅ add main components for showing data. TextInput, Button - for search bar. ScrollView, Button, Image, Text and View for showing recipesa and etc.
- ✅ add main UI styles for components
- ✅ fix errors after checking yarn lint commant
- ✅ add types for methods and variables
- ✅ add types for Components and Containers
- ✅ add types for Redux actions, reducers and app state

- ✅ check application on iOS
- 🚫 check application on Android
- 🚫 add tests for components

### Other

- I have created some components (class/functional), HOC
- I have tried to use TS and types for all elements
- estimated time: I think that 4 hours it is enougf if you have working project with project sctructure, UI and ect. In this case you just create a few components and all work will be so fast. In my case I have created all project (which we can use in normall work), smal UI and ect.