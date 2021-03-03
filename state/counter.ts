import { atom } from 'jotai'

export const countAtom = atom(0)
export const doubledCountAtom = atom((get) => get(countAtom) * 2)

export const incCountAtom = atom(null, (get, set) => {
  const count = get(countAtom)
  if (count < 10) set(countAtom, count + 1)
})

export const decCountAtom = atom(null, (get, set) => {
  const count = get(countAtom)
  if (count > 0) set(countAtom, count - 1)
})
