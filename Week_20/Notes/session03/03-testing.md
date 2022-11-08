# Testing

## Demo

- Open [25-Ins_Testing/src](../../01-Activities/25-Ins_Testing)
  - `npm run test`
  - Note the test script in `package.json`
  - Note the `__tests__` folder
    - You can also put your test files in the same folder as the actual files, and call them `<blah>.test.js`: which is preferable?
  - Look at `index.test.js`
    - Check out the `beforeEach()` and `afterEach()` calls
    - Check out the `act()` calls
      - This is React specific, and more information can be found [here](https://reactjs.org/docs/testing-recipes.html#act)
      - It is part of `react-dom/test-utils`

## Try

- Try [26-Stu_Testing/README.md](../../01-Activities/26-Stu_Testing/README.md)
