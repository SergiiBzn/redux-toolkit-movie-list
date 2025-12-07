# Redux Toolkit Movie List

A small React + Redux Toolkit project for managing a simple list of movies.  
The app lets you add new movies and remove existing ones, using a clean and minimal Tailwind-based UI.

## Features

- View a list of movies
- Add a new movie via input form
- Remove a movie from the list
- Global state management with Redux Toolkit
- Simple, responsive UI built with Tailwind CSS

## Tech Stack

- React
- Redux Toolkit
- React Redux
- Vite
- Tailwind CSS

## Project Structure

- `src/store.js` – Redux store configuration using `configureStore`
- `src/movieSlice.js` – movie slice with actions and reducer
- `src/components/MovieInput.jsx` – input and button to add a movie
- `src/components/MovieList.jsx` – list of movies with delete buttons
- `src/App.jsx` – main layout and composition of components
- `src/main.jsx` – React entry point with `<Provider>` and store

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## Learning Goals

This project is mainly for practicing:

- Setting up Redux Toolkit with `configureStore` and `createSlice`
- Connecting Redux to React via `Provider`, `useSelector`, and `useDispatch`
- Organizing application state in a clear and simple way
- Styling a small React app with Tailwind CSS
```
