# State in React

## Demo

- Open [slide deck](https://docs.google.com/presentation/d/1-3k49f8V-tRaTefWpSrXlts2wEcBC9lKOE0MQtkl_ig/edit?usp=sharing)
- Make a practice application `npx create-react-app 00-practice app` in the [../01-Activities](../../01-Activities/) folder
- If you get an `eslint` preflight check error when setting up the React app, add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true`.
- Install the [React developer tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).
- Open [01-Ins_Providers](../../01-Activities/01-Ins_Providers/) inside the practice app
  - Inside the dev tools extension, click on components, and then on `Context.Provider`, show what data is available to us
  - Open `UserContext.js`
  - `React.createContext()`
  - `<UserContext.Provider />`
  - Open `App.js`
  - `<UserProvider>`
  - Open `UserComponent.js`

## Try

- Try [02-Stu_Providers/README.md](../../01-Activities/02-Stu_Providers/README.md)
