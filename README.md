# Next.js vs Gatsby - POC server

## How to run the server?

1. Install all dependencies with `yarn` command.
2. Run the app with `yarn start`.
3. Your server will be running at `http://localhost:4000`.

## Database file

When you run app for the first time it will create a `db.json` file in your root directory. This file contains a
database with user profiles. Single profile has the following shape:

```ts
type Profile = {
  id: string;
  name: string;
  image: string;
  description: string;
};
```

## Available endpoints

- `GET /profiles` - returns an array with all profiles.

- `GET /profiles/:id` - returns single profile by its ID.

- `PATCH /profiles/:id` - patches profile by its ID. Should provide a body of type specified below.

```ts
type Body = {
  name?: string;
  image?: string;
  description?: string;
};
```
