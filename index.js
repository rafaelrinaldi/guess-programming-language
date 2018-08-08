const { highlight, listLanguages, getLanguage } = require('highlight.js')

let languages

function guessProgrammingLanguage (value) {
  return new Promise(resolve => {
    if (!languages) languages = listLanguages()

    const match = languages.filter(getLanguage).reduce(
      (previous, next) => {
        const current = highlight(next, value, false)
        const language = next

        if (current.relevance > previous.relevance) {
          return { ...current, language: next }
        }

        return previous
      },
      { relevance: 0, value }
    )

    resolve(match.language || null)
  })
}

module.exports = guessProgrammingLanguage
