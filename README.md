# Fast React Pizza Co.

A pizza ordering app built to learn modern React patterns including React Router
data loading, Redux Toolkit, and Tailwind CSS.

> **Work in progress** - this README gets updated as new features are added.

## What it does

- Pizza menu loaded from the API and displayed on /menu
- App layout with company name header and cart overview on every page
- Search any order by ID from the header - works from any page
- Create a new order by filling in name, phone, address and selecting priority
- After placing an order, immediately redirected to the order confirmation page

**Planned features:**

- Enter your name to start ordering (no accounts needed)
- Browse the pizza menu loaded from an API
- Add pizzas to a cart, adjust quantities
- Place an order with name, phone and address
- Optional GPS location for easier delivery
- Mark an order as priority (+20% cost) before or after placing it
- Look up any existing order by its unique ID

## How to run it

```bash
npm install
npm run dev
```

## Tech

- React 18
- Vite (build tool)
- React Router v6 (with data loading)
- Redux Toolkit (global state)
- Tailwind CSS (styling)

## What I learned

**React Router loaders** - this was the first genuinely new concept in this
section. Instead of fetching data inside a useEffect after the component mounts,
you define a `loader` function and attach it to the route. React Router them
fetches the data at the same time as it starts rendering the route - so by the
time the conponent renders, the data is already there. No loading spinner in the
component, no useEffect, no stale state. You read the data with `useLoaderData()`
and React Router automatically knows which loader to use based on which route
rendered the component. The convention is to co-locate the loader in the same
file as the page it serves and reanme it on import in App.jsx
(`loader as menuLoader`) since every page exports a function called `loader`.

**React Router actions** - the counterpart to loaders. WHere loaders read data,
actions write it. You replace the HTML `<form>` with React Router's
`<Form method="POST">`, export an `action` function from the page file, and
write it to the route. The action receives the submitted data via
`request.formData()` - two lines that always go together:
`const formData = await request.formData()` and
`const data = Object.fromEntries(formData)`. Non-form data (like the cart from
Redux) goes in a hidden input as JSON. After the action completes, you redirect
using `redirect()` from react-router-dom - you can't use `useNavigation` in an
action because it's a hook and hooks only work in components. The nicest thing
about this approach: no `onSubmit`, no `useState` for inputs, no loading state -
React Router handles it all.

## Project structure

```
src/
    features/
        user/
        menu/
        cart/
        order/
    ui/             ← reusable UI components
    services/       ← API interaction
    utils/          ← pure helper functions
    App.jsx
    main.jsx
    index.css
```

## Possible imporvements

_(being built - will update as features are added)_
