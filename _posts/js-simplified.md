---
title: 'JavaScript Simplified'
date: '2023-04-25'
---

# JavaScript Simplified in TypeScript
While interviewing, I started to take some simplified JavaScript notes and figured I could start sharing some of them.

## Async/Await
A function that knows to expect a promise with the await keyword

```ts
// Here we define a function that expects the await keyword.
async function getQuery(queryString: string): Promise<any> {
  return await fetch(`/api/query=${queryString}`);
}
```

## Callbacks
A function that is passed into another as an argument, which is then invoked inside the outer function to complete some kind of routine or action

```ts
// The function we will use as a callback.
function addTwo(num: number): number {
  return num + 2;
}

function processInput(callback: () => number): void {
  const number = prompt("Enter a number to add two to it.")
  callback(numer);
}
```

## Promises
An object representing the eventual completion or failure of an asynchronous operation.

```ts
// Defining a promise.
const promise = new Promise();
```

## Closures
A combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

```ts
function main() {
  const name = "Arthur";

  function greeting() {
    // Because we are still in the same lexical scope or the same enclosed
    // area, we have access to name within this function.
    console.log(`Hello, ${name}!`)
  }
}
```

## Synchronous Code
As the name suggests, operations run in sequence, one by one.

## Asynchronous Code
Allows a program to be executed immediately.
