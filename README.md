# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Screenshot](./src/assets/screenshots/10.PNG)
![Screenshot](./src/assets//screenshots/11.PNG)
![Screenshot](./src/assets/screenshots/12.PNG)

### Links

- Solution URL: [Solution URL](https://github.com/alexmina12/FrontEnd-Mentor-Space-Tourism)
- Live Site URL: [Live site URL](https://front-end-mentor-space-tourism-kappa.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- Tablet-first workflow
- React + Vite
- Tailwind CSS

### What I learned

```js
if (window.innerWidth < x) {
  return "";
}
```

```tailwind
keyframes: {
"crew-slider": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
}}
```

```tailwind + css classes
<p className="sh1 text-tertiary">225 MIL. KM</p>
```

```change style by conditions
<h1
  className={`text-tertiary ${showMenu ? "text-[80px]" : "h1"}`}
>
  SPACE
</h1>

```

```React
const [tech, setTech] = useState("launch");
const [showMenu, setShowMenu] = useState(false);

```

- [Tailwind docs](https://tailwindcss.com/) - This helped me in finding all the css and figma styles.
- [React docs](https://legacy.reactjs.org/docs/conditional-rendering.html) - An old article, but still working in the same way about rendering with operators.

## Author

- Frontend Mentor - [@alexmina12](https://www.frontendmentor.io/profile/alexmina12)
- Instagram - [@minaiosif](https://www.instagram.com/minaiosif/)
