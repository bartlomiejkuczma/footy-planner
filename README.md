# Footy Planner

Fancied learn something new so converting somewhat usable version of my angular 12 app for planning 3G/4G pitch games into Svelte cause why not... :D

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Running the tests

You can run the unit tests via a command prompt with:

```bash
# Watch mode
npm run test:unit

# Non-watch mode - handy for ci builds, git hooks, etc
npm run test:unit-headless
```

You can run the Playwright UI tests via a command prompt with:

```bash
npm run test
```

You can also run them via the Playwright VS Code extension

## Commiting

Repository follows [conventional commit messages pattern](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13) via git hooks using `commitlint` and `husky`. Additionally, `commitizen` was added to make commits easier and less cumbersome from CLI using following command:

```bash
npm run commit
```

## Versioning

`Standard-version` was also added to simplify generation and maintenance of solution versioning and changelog file. The update can be triggered using following command:

```bash
npm run release
```

The above will:

1. Retrieve the current version of your repository by looking at `packageFiles`, falling back to the last `git tag`.
2. `bump` the version in `bumpFiles` based on your commits.
3. Generates a `changelog` based on your commits (uses conventional-changelog under the hood).
4. Creates a new `commit` including your `bumpFiles` and updated `CHANGELOG.md`.
5. Creates a new `tag` with the new version number.

### Structure of the app

[This should follow a basic project structure of any svelteKit app. Decided to follow someone's standard for once..](https://kit.svelte.dev/docs/project-structure)
