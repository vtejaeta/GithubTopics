# GitHub Topic Explorer

## Prerequisites for this project

### Environment variables

One should have file named .env with the Github API key with the following setup. Please refer  [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)

```js
.env
REACT_APP_GITHUB_API_TOKEN = [Github API key]
```

## How to run this project

1. Use the following command `npm install` or `yarn` to install all of the dependencies.
2. Now you can run `npm run start` or `yarn start` to run the app in the development mode. It can be viewed in browser at `http:localhost:3000`
3. For bundling you can use `npm run build` or `yarn build` which optimises build for best performance

### Future Improvements

- Code Structuring and Refactoring:
    1. All the colors used across the application can be fetched from only one colors object so that upon refactoring in future there would not be need to change in multiple places.
    2. Seperate all the data fetching logic and UI rendering logic.

- Additional Features:
    1. Add dark mode support for the UI.
    2. Add input field so that user may enter custom input value
    3. Add Pagination support to handle lot of topics
