# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Navigation

React Router provides the Home (`/`) and About (`/about`) pages. The navigation uses
`NavLink`, so its active page is styled automatically without a full page reload.

### Router imports

- `BrowserRouter` in `src/main.jsx` enables client-side routing and keeps the URL in sync
  with browser history.
- `Routes` in `src/App.jsx` selects the route that matches the current URL.
- `Route` maps a URL path to the page component rendered for it.
- `NavLink` creates in-app navigation links and adds the `active` class to the current link.
- `Home` and `About` are local page components rendered by the routes.

The entry point also imports `StrictMode` from React to check for common problems during
development, `createRoot` from React DOM to mount the app, `index.css` for global styles,
and `App` as the component to mount. `App` imports `App.css` for navigation/page styles
and imports the `Home` and `About` page components. `Home` imports `useState` from React
to track the selected bird, `heroImg` for the hero background, `reactLogo` for the React
logo, `viteLogo` for the Vite logo, and `BirdCard` for each reusable bird selector.

### Bird explorer data flow

`src/catalog.json` stores the bird records. `Home.jsx` imports that catalog, renders its
records with `birds.map()`, and passes each record, its selected state, and the
`setSelectedBird` callback to the reusable `BirdCard` component. When a card is clicked,
`BirdCard` passes its `bird` back through `onSelect`; `Home` updates `selectedBird` with
`useState`, and the field-notes panel displays that bird's diet, habitat, lifespan, and
fun fact. Add another object to `catalog.json` to include another card in the grid.

### Birding list state

`Home.jsx` also owns `birdingList`, an array of saved bird records. Adding uses a
functional state update that returns a new array and prevents duplicates; removing uses
`filter()` to return a new array without the chosen bird. `BirdingList.jsx` receives the
array and remove callback as props, renders saved birds with `.map()`, and shows an
empty-state message when there are none. The saved species count is calculated from
`birdingList.length`, so there is no separately stored total to get out of sync. This
birding list uses a species count rather than a money total because the items are birds,
not products for sale.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
