# JSON Web Token

## Demo

- What is a JWT
- Open [21-Ins_Sign-JWT](../../01-Activities/21-Ins_Sign-JWT), install, seed and run
  - Open `auth.js`
  - Note the `jsonwebtoken` library
  - Note the secret and expiration config
  - Open `resolvers.js` and note the `addProfile` resolver
  - Open `Profile.js`
  - Note the password code
  - Note the `save` hook on new profile creation
  - Note the `isCorrectPassword` method
  - Open [localhost:3001/graphql](http://localhost:3001/graphql)
  - Note the `Auth` type
  - Note the `addProfile` and `login` mutations
  - Create a new profile, and grab the signed token in the `token` field
  - Open [JSON Web Token Debugger](https://jwt.io/#debugger-io) and decrypt the JWT
  - Why is this secure?

## Try

- Try [22-Stu_Sign-JWT/README.md](../../01-Activities/22-Stu_Sign-JWT/README.md)
