import { clas } from "../helper/function"

export const pointerStatus = {
  active: clas('text-2xl font-weight', {
    'text-green-500': true,
    'text-transparent': false
  }),
  unactive: clas('text-2xl font-weight', {
    'text-green-500': false,
    'text-transparent': true
  })
}

export const characterStatus = {
  correct: clas(
    'text-2xl font-weight',
    {
      'text-gray-400': false,
      'text-red-400': false,
      'text-dark': true,
    }
  ),
  uncorrect: clas(
    'text-2xl font-weight',
    {
      'text-gray-400': false,
      'text-red-400': true,
      'text-dark': false,
    }
  ),
  normal: clas(
    'text-2xl font-weight',
    {
      'text-gray-400': true,
      'text-red-400': false,
      'text-dark': false,
    }
  )
}

export const tabItems = {
  'main': 'main',
  'settings': 'settings'
}