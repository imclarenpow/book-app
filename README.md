# Book App

## Project Milestones

Goal: I want to "gamify" reading, and stop using GoodReads (it is cheeks).

1. Allow users to search for books and display books information about books.
2. Allow users to mark books as wishlist, reading and read.
3. Create an algorithm to determine the "XP" of a book.
4. Allow users to see their stats over a period of time.
5. Allow users to add friends and see compare their stats to their friends.
6. Create achievements / badges for users to gain.
7. Create a leaderboard for users to see who has the most XP.
8. More to come...

## Installation

- Clone repo
- Run `npm install` to install dependencies
- Run `npm start dev` to start the dev server
- Open `http://localhost:5173/` in your browser

## Project Info

React + Vite (JS)
css

## Versioning

Why use SemVer when you can just raw dog your versioning? There are and will be no versioning rules for this project it will be a purely vibes based approach.

Current Version: **v.0.0.0-alpha**
_Tagged as the first shippable mess. Working search, info page, and average page count. Chaos levels: stable?_

## Builds

### v0.0.0-alpha

Proof of concept
The initial vibe coded version, what could possibly go wrong..
Introduces:

- App.jsx
  - Routing
  - Dark mode toggle
  - Header
- Book Search Page
  - Ability to search for books
  - Hitting enter searches
- Book Info Page
  - Back to search button (goes back to search page not the specific thing you were searching)
    - in the future perhaps I do some routing to allow for this..
  - Book Cover
  - Book Title
  - Book Author
  - Book Description
  - Average Version Page Count

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
