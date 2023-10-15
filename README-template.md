# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This project is an interactive card details form from frontend mentor that allows users to input their card information in real time.

### The challenge

The main challenge of this project was to create an intuitive and user-friendly interface of the card details.

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

In this section, i startded by adding the functionality to the form after the html layout, then i styled it with flex and grid properties.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

The key takeaways from this project, is that i have been a able to build on form inputs and its properties, i have learn't how to use css grid of form layouts too, i have also be a able to learn more about some javascript funtions and regEx pattern too.

```html
<h1>Some HTML code I'm proud of</h1>
<input
  type="number"
  placeholder="MM"
  oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"
  minlength="2"
  maxlength="2"
  id="card_month"
  required
/>
```

```css
.proud-of-this-css {
  color: papayawhip;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input::placeholder {
  font-family: inherit;
  color: var(--Dark-grayish-violet);
}

input:focus {
  outline-color: hsl(249, 99%, 64%);
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}

function format(s) {
  return s
    .toString()
    .replace(/(\d{4})/g, "$1 ")
    .trim();
}
```

### Continued development

I look forward to woriking on security functions with API KEY's in the future

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [resource 2](https://www.w3schools.com/) - This is a website based on teaching it user everything about frontend development.

## Author

- Website - [Jelilking](https://github.com/jelilking)
- Frontend Mentor - [@jelilking](https://www.frontendmentor.io/profile/Jelilking)
- Twitter - [@maliking25](https://www.twitter.com/maliking25)

## Acknowledgments

I would like to express my sincere gratitude to the team behind the developement of the "w3schools" website for their helpful guidance and support in the website, it has helped me throughout the development of the interactive card details project. Their expertise and willingness to share their knowledge significantly contributed to the successful completion of this endeavor. Their insightful feedback and encouragement were instrumental in overcoming various challenges, enabling me to deliver a robust and user-friendly solution. I am truly thankful for their unwavering assistance, which has not only enhanced my technical skills but also enriched my overall understanding of interactive form development.
