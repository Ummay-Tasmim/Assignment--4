## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById("id") → One element by ID

- getElementsByClassName("class") → All elements with class (live HTMLCollection)

- querySelector("selector") → First element matching CSS selector

- querySelectorAll("selector") → All elements matching CSS selector (static NodeList)

### 2. How do you create and insert a new element into the DOM?
- To create and insert a new element into the DOM, first you create the element using JavaScript by specifying the type of element you want, like a div, p, or span. Then you can add content or attributes to it, such as text, classes, or IDs. After that, you insert it into the DOM by choosing where it should go—for example, at the end of the body, at the beginning, or before another existing element. This process allows you to dynamically add new elements to your web page without modifying the HTML directly.


### 3. What is Event Bubbling? And how does it work?

- Event Bubbling is when an event on an element (like a button click) travels up to its parent elements in the DOM. The event happens on the target first, then on its ancestors.

### 4. What is Event Delegation in JavaScript? Why is it useful?
-

### 5. What is the difference between preventDefault() and stopPropagation() methods?
-