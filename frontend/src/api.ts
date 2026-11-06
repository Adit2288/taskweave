import type { Project } from './types'

export async function getProjects(
  signal?: AbortSignal,
): Promise<Project[]> {
  const response = await fetch('/api/projects/', {
    headers: {
      Accept: 'application/json',
    },
    credentials: 'same-origin',
    signal,
  })

  if (response.status === 401 || response.status === 403) {
    throw new Error('Please log in to Django admin with a staff account.')
  }

  if (!response.ok) {
    throw new Error('Unable to load projects. Please try again.')
  }

  return response.json()
}