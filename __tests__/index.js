const { promisify } = require('util')
const fs = require('fs')
const path = require('path')
const readFile = promisify(fs.readFile)
const guessProgrammingLanguage = require('../')

async function readFileContents (file) {
  try {
    const contents = await readFile(path.resolve(__dirname, file), 'utf8')
    return contents
  } catch (error) {
    throw error
  }
}

/**
 * Many fixtures borrowed from the awesome “Learn X in Y minutes”:
 * https://learnxinyminutes.com
 */

test('Markdown', async () => {
  const contents = await readFileContents('./markdown')
  expect(await guessProgrammingLanguage(contents)).toEqual('markdown')
})

test('JSON', async () => {
  const contents = await readFileContents('./json')
  expect(await guessProgrammingLanguage(contents)).toEqual('json')
})

test('JavaScript', async () => {
  const contents = await readFileContents('./javascript')
  expect(await guessProgrammingLanguage(contents)).toEqual(
    expect.stringMatching(/jsx|javascript/)
  )
})

test('HTML', async () => {
  const contents = await readFileContents('./html')
  expect(await guessProgrammingLanguage(contents)).toEqual(
    expect.stringMatching(/h|xml/)
  )
})

test('CSS', async () => {
  const contents = await readFileContents('./css')
  expect(await guessProgrammingLanguage(contents)).toEqual('css')
})

test('Python', async () => {
  const contents = await readFileContents('./python')
  expect(await guessProgrammingLanguage(contents)).toEqual('python')
})

test('Ruby', async () => {
  const contents = await readFileContents('./ruby')
  expect(await guessProgrammingLanguage(contents)).toEqual(
    expect.stringMatching(/ruby|elixir/)
  )
})

test('Elixir', async () => {
  const contents = await readFileContents('./elixir')
  expect(await guessProgrammingLanguage(contents)).toEqual(
    expect.stringMatching(/ruby|elixir/)
  )
})

test('Clojure', async () => {
  const contents = await readFileContents('./clojure')
  expect(await guessProgrammingLanguage(contents)).toEqual('clojure')
})

test('No match', async () => {
  expect(await guessProgrammingLanguage('')).toBeNull()
})
