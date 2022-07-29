# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have

- a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

- We will pay particular attention to the way the code is organized, and to the overall readability
- Unit tests will be greatly appreciated
- Design will be ignored, however usability and accessibility will be taken into consideration
- Remember to update this README with instructions on how to install, run and test your application
- Your first goal is to have a working app, but feel free to improve the application however you see fit
- We hope that you can complete the assignment within 2 hours but don't set any time constraints
- Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

- Leave any technical notes on any libraries or tools you chose to use, the more detail the better.

## Prerequisites for this project

### Environment variables

One should have file named .env with the Github API key with the following setup

```js
//.env
REACT_APP_API_KEY = [TMDB API key]
REACT_APP_BASE_URL = https://api.themoviedb.org/3
```

## How to install this project

1. Clone the project using the command `git clone https://github.com/vtejaeta/Movie-library-TypeScript.git`
2. Move into the file directory you wish to run using `cd {folder_name}`.
3. Use the following command `npm install` or `yarn` to install the dependencies.
4. Now you can run `npm run start` or `yarn start` to run the app in the development mode. It can be viewed in browser at `http:localhost:3000`
5. For bundling one can use `npm run build` or `yarn build` which optimises build for best performance

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- Code Structuring:

- Refactoring:

- Additional Features:
