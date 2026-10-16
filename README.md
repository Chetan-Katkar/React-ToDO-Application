# Daily Tasks

A small todo list built with React. It lets you add tasks, mark them as complete, and remove tasks. Your list is saved in your browser, so it is still there when you come back to this app on the same browser.

## What is React?

React is a JavaScript library for building the parts of a website that people see and use. Instead of writing one large page that changes all at once, you can make smaller reusable pieces called **components**. This project has an `App` component that displays the todo list.

React also keeps track of changing information called **state**. In this app, the list of tasks and the text being typed into the new-task box are state. When state changes, React updates the page for you. For example, clicking a task's check button changes its completed state, and the task's appearance updates.

## Run the app on your computer

You need to install [Node.js](https://nodejs.org/) first. Node.js includes `npm`, a tool used to install JavaScript packages and run project commands.

1. Download or clone this repository, then open a terminal in the project folder.
2. Install the project packages:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. Open the local address printed in the terminal (usually `http://localhost:5173`) in your browser.

To make an optimized production version, run `npm run build`. The generated files are placed in the `dist` folder.

## Using the todo list

- Type a task in the box and select the **+** button to add it.
- Select the square beside a task to mark it complete or incomplete.
- Select the **×** beside a task to remove it.
- The number above the list shows how many tasks are still incomplete.

Tasks are stored in your browser's local storage. They are not shared with other browsers or devices.

## Project files

```text
index.html       The page that loads the React application
src/main.jsx     Starts React and displays the App component
src/App.jsx      The todo list and its behavior
src/style.css    The app's colors, spacing, and responsive layout
```

## Tools used

- **React** builds the interactive interface.
- **Vite** runs the development server and creates the production build.
- **CSS** styles the page.
