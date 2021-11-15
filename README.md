# Context Demo - React context with Bit components

The movies repo is a react-based demo project showcasing a wide variety of component use-cases with examples of how to implement:



Exported components can be seen [here](https://bit.dev/learn-bit-react/movies)

<img width="1788" alt="CleanShot 2021-08-10 at 19 48 13@2x" src="https://user-images.githubusercontent.com/67269267/137623025-fe671ee8-a386-4ada-9704-50b4ed6de0fa.png">

If you would like to import(clone) the project to take it for a test run make sure you have [bit installed](https://harmony-docs.bit.dev/getting-started/installing-bit).

```bash
npm i -g @teambit/bvm
bvm install
```

Create an empty workspace - the second argument after `new` is the workspace name, and is up to you (skip this step if you want to import the components into an already created workspace)

```bash
bit new react movies --empty
```

Use the `bit import` command to import all components into your workspace. This is similar to cloning a project.

```bash
bit import "learn-bit-react.movies/*"
```

Copy the `workspace.jsonc` file from this repository and replace the one in your workspace. This will ensure you have the correct dependencies and environments set.

Start the dev server

```bash
bit start
```

You should now see all the ecommerce components on [localhost:3000](http://localhost:3000)
