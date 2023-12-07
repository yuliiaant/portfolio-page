import html from "../../public/images/html-icon.svg";
import css from "../../public/images/css-icon.svg";
import js from "../../public/images/js-icon.svg";
import ts from "../../public/images/ts-icon.svg";
import react from "../../public/images/react-icon.svg";
import redux from "../../public/images/redux-icon.svg";
import next from "../../public/images/next-icon.svg";
import sass from "../../public/images/sass-icon.svg";
import git from "../../public/images/git-icon.svg";
import nodejs from "../../public/images/nodejs-icon.svg";
import vscode from "../../public/images/vscode-icon.svg";
import github from "../../public/images/github.svg";

export const icons = {
  html: html,
  css: css,
  js: js,
  ts: ts,
  react: react,
  redux: redux,
  next: next,
  sass: sass,
  git: git,
  nodejs: nodejs,
  vscode: vscode,
  github: github,
};

export const projects = [
  {
    title: "Online store",
    description:
      "Ability to add items to their favorites or shopping cart, data is stored in local storage, or it goes into the user object on the server. Additionally, users can log in, perform a general search and receive notifications about operations.",
    stack: "React/Redux, SASS, REST API and more.",
    demo: "https://nice-gadgets-be-etof.onrender.com/",
    code: "https://github.com/fe-jul23-NORM/NORM_FE",
    photo: '/previews/gadjets.png',
  },
  {
    title: "Part of the game asset",
    description:
      "User is able to: switching between tabs, add new card to the list, change card props and name, drag and drop to reorder cards on the list. Data is stored in Local Storage.",
    stack: "Redux, Next, LocalStorage and more.",
    demo: "https://test-task-next-eight.vercel.app/positions",
    code: "https://github.com/yuliiaant/App-for-Cogitize-Solutions",
    photo: '/previews/game.png',
  },
  {
    title: "Checklist Application",
    description:
      "Application with React is a web-based task management tool built to enhance productivity and organization. This project offers a streamlined and intuitive way to manage tasks and to-do lists.",
    stack: "React, TypeScript, SCSS, Fetch and more.",
    demo: "https://yuliiaant.github.io/react_todo-app-with-api/",
    code: "https://github.com/yuliiaant/react_todo-app-with-api/tree/develop",
    photo: '/previews/todo.png',
  },
  {
    title: "Page with REST API",
    description:
      "User is able to upload users list, scroll through it and create new user through filling the form and sending data to server.",
    stack: "React, TypeScript, REST API, Fetch and more.",
    demo: "https://yuliiaant.github.io/abz-task-react/",
    code: "https://github.com/yuliiaant/abz-task-react",
    photo: '/previews/api.png',
  },
  {
    title: "B&Q Landing page",
    description:
      "Landing page for a company that sells audio devices. I implemented this page based on a design from Figma, utilizing HTML/CSS, SASS (SCSS), and BEM methodology.",
    stack: "HTML, CSS, SCSS, BEM(Block Element Modifier).",
    demo: "https://yuliiaant.github.io/layout_landing-page/",
    code: "https://github.com/yuliiaant/layout_landing-page/tree/develop",
    photo: '/previews/bo.png',
  },
];
