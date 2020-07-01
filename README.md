# Home Page

## Discussion

**Topics to discuss:**

- Events: `onClick`
- Hooks: `useState`
- Conditional Operator

[React 4 - Events & States](https://docs.google.com/presentation/d/1XD1QxGNfEP_BmNRlHPyP2h5WTj6gi4ql0WemniTw4vY/edit#slide=id.g4424c630a5_0_7)

## Step 1: Counter

Let's create a counter just to see how events and state works.

1. Create two buttons with a variable called `counter` between them:

   ```javascript
   function App() {
     let counter = 0;
     return (
       <ThemeProvider theme={theme}>
         <GlobalStyle />
         <button>Increment</button>
           {counter}
         <button>Decrement</button>
         [...]
   ```

2. The event we will use to handle clicking is `onClick`. Let's start with giving it an alert.

   ```jsx
   <button onClick={alert("Hello")}>Increment</button>
   ```

3. What's going on? The alert appeared without me pressing the button. Why? That's because an event expects a function. Let's fix it:

   ```jsx
   <button onClick={() => alert("Hello")}>Increment</button>
   ```

4. Let's try again. Yay it's working! Let's clean this up by defining our function:

   ```javascript
   const handleIncrement = () => alert("Hello");
   ```

5. Let's pass it to our event:

   ```jsx
   <button onClick={handleIncrement()}>Increment</button>
   ```

6. The alert appeared again without me pressing the button! That's because we're calling the function when we add the parentheses `()`. So the event only expects us to pass a function, and the event itself will call the function whenever it's triggered.

   ```jsx
   <button onClick={handleIncrement}>Increment</button>
   ```

7. What if we want to pass an argument? Let's modify our function:

   ```javascript
   const handleIncrement = (name) => alert(`Hello ${name}`);
   ```

8. The only way to pass an argument to a function is when calling it:

   ```jsx
   <button onClick={handleIncrement("Lailz")}>Increment</button>
   ```

9. But this won't work. The alert was called without clicking the button. In this case we will put our function in an anonymous arrow function

   ```jsx
   <button onClick={() => handleIncrement("Lailz")}>Increment</button>
   ```

10. Now that we know how to use `onClick` let's make this counter work, let's fix the `handleIncrement` method and add a `handleDecrement` method.

    ```javascript
    const handleIncrement = () => counter++;
    const handleDecrement = () => counter--;
    ```

11. Let's pass the method to the events:

    ```jsx
    <>
      <button onClick={handleIncrement}>Increment</button>
      {counter}
      <button onClick={handleDecrement}>Decrement</button>
    </>
    ```

12. Nothing happened! Unfortunately, we can't change things on the screen directly. This is when the magic of React comes into place. We need to use something called `useState`. Basically, anything that you want to change on the screen dynamically must be using `useState`.

13. Let's start with importing it from `react`:

    ```javascript
    import React, { useState } from "react";
    ```

14. `useState` is a method that takes an argument and returns two values, the argument it takes is the initial value of our counter in this case. Let's `console.log` it to see what it returns:

    ```javascript
    console.log(useState(0));
    ```

15. As you can see, it returns `0` which is the initial value we passed and a function. This function is the only thing that's allowed to change the first value. Let's try it out.

16. In JavaScript, to save two arguments at the same time we use the following syntax:

    ```javascript
    let [counter, setCounter] = useState(0);
    ```

17. The first returned value is saved in `counter`, while the second returned value which is the function saved in `setCounter`. The naming convention for the function is `set` followed by the state name which is `counter` in this case.

18. Delete the old `counter`.

19. To use `setCounter`, we will basically call it and pass it the new value for `counter`:

    ```javascript
    const handleIncrement = () => setCounter(counter + 1);
    const handleDecrement = () => setCounter(counter - 1);
    ```

20. Finally it's working!

## Step 2: Dark Mode Button

We built those buttons and the counter only to show events and how we can use them. Delete the JSX for the two buttons and counter, the `counter` and `setCounter` and `useState` and the `handleIncrement` and `handleDecrement` functions.

Now how can we use `state`? We can do a lot with state, let's start with adding a dark mode to our website.

1. Let's add our button first, in `styles.js` create a component for our button:

   ```javascript
   const ThemeButton = styled.button`
     font-size: 1em;
     margin: 1.25em;
     padding: 0.25em 1em;
     border-radius: 3px;
     background-color: ${(props) => props.theme.mainColor};
     color: ${(props) => props.theme.backgroundColor};
   `;
   ```

2. Let's call it in `App`:

   ```jsx
   <ThemeProvider theme={theme}>
     <GlobalStyle />
     <ThemeButton>
       Dark Mode
     </ThemeButton>
   ```

3. We need a state that changes between `light` and `dark`, with an initial value of `light`.

   ```javascript
   let [currentTheme, setCurrentTheme] = useState("light");
   ```

4. Now let's create our event handler that toggles between the values `light` and `dark`

   ```javascript
   const toggleTheme = () => {
     if (theme === "light") setTheme("dark");
     else setTheme("light");
   };
   ```

5. Let's clean it up using an ternary operator:

   ```javascript
   const toggleTheme = () =>
     setCurrentTheme(currentTheme === "light" ? "dark" : "light");
   ```

6. When clicking on this button, we want to change our website's theme from light to dark. Let's add an `onClick` that calls `toggleTheme`

   ```jsx
   <ThemeButton onClick={toggleTheme}>Dark Mode</ThemeButton>
   ```

7. Let's check React Dev Tools to see if the state is changing. It is!

8. But how can we apply the change? Let's start with defining our `lightTheme` and `darkTheme`.

   ```javascript
   const theme = {
     light: {
       mainColor: "#242424", // main font color
       backgroundColor: "#fefafb", // main background color
       pink: "#ff85a2",
     },
     dark: {
       mainColor: "#fefafb", // main font color
       backgroundColor: "#242424", // main background color
       pink: "#ff85a2",
     },
   };
   ```

9. Now, when `currentTheme`'s value is `light` we will pass the `light` object to `ThemeProvider` and vise versa.

   ```jsx
   <ThemeProvider theme={theme[currentTheme]}>
   ```

10. It's working!!!!!! We got our dark mode theme! Woohooo! Even the button's color is changing.
