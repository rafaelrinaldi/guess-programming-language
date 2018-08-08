# guess-programming-language

> Naive programming language guessing built on top of [highlight.js][highlight.js]

[highlight.js]: https://github.com/highlightjs/highlight.js

## Install

```sh
npm i guess-programming-language
```

## Usage

```js
import guessProgrammingLanguage from 'guess-programming-language'

async function run() {
  console.log(
    await guessProgrammingLanguage('const foo = "bar";')
  ) //=> javascript
}

run()
```

## API

### `guessProgrammingLanguage(value)`

Returns a `Promise` instance that resolves to the programming language name (lower case) if a match is found or `null` if no match is found.

#### `value`

Type: `String`

Value for the programming language to guess.


## Why

- [highlight.js][highlight.js] is great and its guessing mechanism is good enough for most cases I needed it for
- Most libraries I've tried either have confusing APIs or require Node.js C bindings that fails to build when npm installing it

## Gotchas

- If you're looking for something super precise this is not it
- This library currently only works in Node.js, feel free to send a PR if you want to add browser support

## License

MIT © [Rafael Rinaldi](https://rinaldi.io)

---

<p align="center">
  <a href="https://buymeacoff.ee/rinaldi" title="Buy me a coffee">Buy me a ☕</a>
</p>
