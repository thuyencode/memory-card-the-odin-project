import { type SkillIcon } from '@/types'
import { skillIconsList } from './skill-icons'

function getRandomIndex(): number {
  return Math.floor(Math.random() * skillIconsList.length)
}

function getRandomIndexes(): Set<number> {
  const indexes = new Set<number>()

  while (indexes.size < 10) {
    indexes.add(getRandomIndex())
  }

  return indexes
}

export function getRandomIconsList(): SkillIcon[] {
  return [...getRandomIndexes()].map((index) => skillIconsList[index])
}

export const capitalize = (str: string): string =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`
