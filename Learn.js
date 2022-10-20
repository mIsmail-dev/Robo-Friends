/////////////////////////////// 03. React Basics /////////////////////////////////
// - React Key Concepts
// 1. Don't touch the dom, I will do it - using Virtual Dom.
// Imperative vs Declarative paradiagm
// Directly changes the dom by documentbyid.innerhtml etc. We have to manage a lot of edge cases. That's bad :/
// Decalrative: We tell it this is the state of the our app & React automatically just does it.
// In Simple Words, we give the state & it updated dom in the best way possible by itself.

// 2. Component Architecture
// Basically, we have components for every thing in react. We join these components to make a big app like a lego house ;)

// 3. Uni-Directional Data Flow
// Basically, data flows from top to bottom. One way Only. To makes error debugging easy & also react Data Flow Easy :)

// 4. UI-Library
// Basically, React is just a ui library. We can use it anywhere for UI. It's not complete frameWork. we can use it on Cross-Platform :)

// setState, useState is Asynchronous
// setState, useState is Asynchronous bcz react batches these set states calls so that it can determine what the most optimal strategy for re-rendering the website is going to be. what do I mean by this. Well, lets say you imagine that you have an application where you have a lot of diffrent components and then perhaps through one interaction, one button click, you are actually updating the states in multiple components. In that case, React doesn't want to just completely isolate and do all those diffrent updates independently. React wants to figure out if it can stack these together, or maybe there's a more optimal way of updating these components so that it is more performance. That's all react is doing under the hood for us. So, as a result It's an asynchronous call.


// Functional Components & Class Components
// In class components, when re-renders happen it will only run the render method in which we have return but in functional Components, In re-render all the function runs again. It's not only return ftn.

// UseState returns two values [value, setValue], So Re-renders happens when the value changes, React is smart enough to know that when the value changes. It doesn't re-render when u call setValue ftn, it re-renders when value changes. If the value is same it is not going to re-render i.e if you have value "a" and then you change it back to "a". It will not re-render.