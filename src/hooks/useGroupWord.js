import { useMemo } from "react"

export const useGroupWord = (words, maxWordPerGroup, groupPosition) => {
  const wordList = useMemo(() => words.split(' '), [words])
  const groupWord = useMemo(() => {
    return wordList.reduce((acc, item) => {
      if (acc.length === 0 || acc[acc.length - 1].length >= maxWordPerGroup) {
        acc.push([])
      }
      acc[acc.length - 1].push(item)
      return acc
    }, [])
  }, [maxWordPerGroup, wordList])

  return {
    currentGroup: groupWord[(groupPosition - 1) < 0 ? 0 : (groupPosition - 1)],
    maxGroup: groupWord.length
  }
}