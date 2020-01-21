**Sustainability Project**\
CECS 445 Spring 2020

---

**Requirements**

> Nodejs  
> This includes `npm`, a package manager
> https://nodejs.org/en/

---

**Getting Started**

- After pulling the git repo, open up your terminal and `cd` into the `sustainability_project` folder

- Then run `npm install`, this will install all of the dependencies for this project

- To start the app, type `npm start`, which will start up a local development server at `localhost:3000` and automatically open up your web browser

---

**Github Proccess**

If you want to add something to the github repo, please make a `branch` and once you are done, create a `pull request` so we can review it before merging it to `master`

---

Notes:

- `ESLint and Prettier` are setup for this repo, whenever you `push`, they will automatically run before hand and try to automatically lint the code, if there are errors that it can't fix, your push won't go through.

  > To run `eslint and prettier`, open up a terminal and run `npm run lint-fix`

- We will be using `Jest` and `React-testing-library` to test our code. Testing ensures that our code will be functional. I will go over how to write tests for your code on a later date.

- I decided to use `styled-components` in place of traditional css, more info can be found at https://styled-components.com/

- We will probably use a `component library` such as https://material-ui.com/
