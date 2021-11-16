# Context Demo - React context with Bit components

The Context repo describes best practises for implementing react context as components, enabling sharing of context/state management functionality across your organisation. 

## Context as components

When thinking of react context, you will generally only have seen a single application in which a context Provider has been set at the root, or some other 
point in the app's component tree, and then consumer components in the same app 'subscribing' to that context via a simple `useContext(ContextObject)`.

So how do I implement a shareable context via a Bit component? 

This example repo illustrates an example of context with components, with the `movies-api-context` component managing the context of the api base-url for communicating with our backend (in this case, a movies database), and a consumer component, the `use-search-movies` hook using that context to create a concrete api call hook which fetches data from the url as passed to it by the context - plus any parameters the hook is configured with - and returns the data from that api call.

## Provide and Consume from the same source

Context via components works essentially in the same way as context in a regular app. One component defines the context, exposing both Provider and Consume functions for it. Then at the app level you use the Provider side to inject the context, and any components who want to consume it simply use the Consume function (e.g. `UseContextAbc`) from the same component. Very simple.

## Keep in mind

The only 'gotcha' with this is when using context with compositions, specifically when using providers via a bit environment. Please see the docs for a full description of what this is, but in short this requires a small setting via the environment to make sure everyone is usng the same instance of the context component. Please see the docs for the `context-example-env` environment in this repo for details, including a short explanation of the issue and solution.

## More than just a context demo repo

Here at bit we like to demonstrate the full benefits of what Bit brings to your code, in particular how it can help you create re-usable assets across your organisation.

We could have written a very simple context component and consumer, but we wanted to illustrate a number of patterns which bit can help you convert code into re-usable chunks, in order to not just compose your code into components, but decompose it into shareable assets. 

### Generic to Concrete

You'll see a generic api-context component (`api-context-base`) for creating API contexts, essentially to inject the baseUrl and fixed parameters for api calls that use the context. 

From this generic component, you can build specific API context components which inject baseUrls for accessing your backend services, which can be shared across your organisation - so, for instance, the team in charge of User data can create a UserContext component, and anyone who wants to create a hook that fetches User data from the backend need only use the UserContext component, which pre-defines the end-point for that backend, and then just pass the required parameters for whatever api call they need to make.

The `movie-api-context` is a concrete example of this.

### Generic Consumers

On the consumer side of our api context we have api hooks, which make the api call that uses the api context, manage the connection and then return the data in a sanitized format.

Here too, we saw that the api hook logic was almost entirely generic; managing the api call state (e.g. loading), and having the same generic stages of call -> loading -> process data or error. So we genericised it into a hook factory component `api-hook-factory` which contains all of that logic, and requires inputs of the parameters the hook is expecting to add to the base context url, and a function for processing the data that comes back. Everything else is abstracted away by the factory, so creating new contextual api hooks is now far easier, for anyone in our organisation!

### Compositions for non-UI components

Finally, this repo demonstrates a dimension of Bit's compositions feature, namely that it can be used to create UI representations of non-UI components. 

For instance, in the `movies-api-context` component here, we have added a composition which demonstrates a live implementation of the context, with a visual representation of what is produced when using the component. And apart from the visual representation, what the composition does is provide a real, live **coded** example of how to utilise the component, to bridge the almost ubiquitous gap between docs and actual code implementation.


## Instructions for Using This Repo

Exported components can be seen [here](https://bit.dev/learn-bit-react/context)

<img width="1788" alt="CleanShot 2021-08-10 at 19 48 13@2x" src="https://user-images.githubusercontent.com/67269267/137623025-fe671ee8-a386-4ada-9704-50b4ed6de0fa.png">

If you would like to import(clone) the project to take it for a test run make sure you have [bit installed](https://harmony-docs.bit.dev/getting-started/installing-bit).

```bash
npm i -g @teambit/bvm
bvm install
```

Create an empty workspace - the second argument after `new` is the workspace name, and is up to you (skip this step if you want to import the components into an already created workspace)

```bash
bit new react context --empty
```

Use the following `bit import` command to import all components into your workspace. This is similar to cloning a project.

```bash
bit import "learn-bit-react.context/*"
```

Copy the `workspace.jsonc` file from this repository and replace the one in your workspace. This will ensure you have the correct dependencies and environments set.

Start the dev server

```bash
bit start
```

You should now see all the ecommerce components on [localhost:3000](http://localhost:3000)
