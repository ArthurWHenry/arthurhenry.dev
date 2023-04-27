---
title: 'JavaScript Simplified'
date: '2023-04-25'
---

# JavaScript Simplified in TypeScript
While interviewing, I started to take notes on a couple JavaScript concepts that I found useful to prepare for Front End Engineering positions. I was able to narrow it down to the concepts below.

## Async/Await

An async function is a function that knows how to expect the possibility of the await keyword being used to invoke asynchronous code.

With an asynchronous functions, the return value is guaranteed to be a promise.

```tsx
// Here we define a function that expects the await keyword.
async function getQuery(queryString: string): Promise<any> {
	// Instead of returning a value directly, this line will return a promise
	// letting the program know that it's still trying to resolve the fetch call.
  return await fetch(`/api/query=${queryString}`);
}
```

## Callbacks

A function that is passed into another as an argument, which is then invoked inside the outer function to complete some kind of routine or action

```tsx
// The function we will use as a callback.
function addTwo(num: number): number {
  return num + 2;
}

// The function that will use the callback function in order to add 2
// to the value that is given by the user.
function processInput(callback: () => number): void {
  const num: number = prompt("Enter a number to add two to it.")
  const result: number = callback(num);
	console.log(value)
}
```

## Promises

A promise is an object representing the eventual completion or failure of an asynchronous operation.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

Callbacks added with `then()` attached will never be invoked before the completion of the current run of the JavaScript event loop.

```tsx
const myPromise: Promise<any> = new Promise((resolve, reject) => {
	setTimeout((): void => {
		resolve("Done!")
	}, 3000)
});

// We reach this line regardless of completion or failure of the promise.
myPromise.then((): void => {
	console.log('The promise has been fulfilled!')
})
```

## Closures

A combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

```tsx
function main(): void => {
  const name: string = "Arthur";

  function greeting(): void {
    // Because we are still in the same lexical scope or the same enclosed
    // area, we have access to name within this function.
    console.log(`Hello, ${name}!`)
  }
}
```

## Synchronous vs Asynchronous Code

As the name suggests, operations that are run in sequential order, one by one.

Asynchronous code allows you to run multiple tasks at once which improves the performance of your application. Asynchronous code can be defined by using `async/await` in your JavaScript (or TypeScript code)

These area very simple definitions to remember, but one that I find useful to look at every time I get back into interviewing to clear any doubt.

## Handy Tips

---

### Initializing a Set with an Existing Array

If we want to turn an array into a set, we initialize a new Set object with the array as a parameter.

```tsx
// We can start a set by passing in the array directly.
const nums: Array<number> = [1, 2, 3, 4, 5];

// We can start a set like below and it'll start it with the values from nums.
const set = new Set<number>(nums);
```

### Setting a Value in a Map Object

Let’s say I was creating a map that stores the amount of time a user has visited my website.
```tsx
const map = new Map<string, number>();

const user: string = 'Arthur'

map.set(user, 1)

// With this line, we are retriving the key's value and if it doesn't exist
// the get() method will return undefined and default to 1. Essentially, saying
// that this is the first time the user visits the website.
const value: number = map.get(user) + 1 || 1

// Then we store the user with the updated (or new) value.
map.set(user, value)
```