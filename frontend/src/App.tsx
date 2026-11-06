import { useState } from 'react'
import { getProjects } from './api'
import type { Project } from './types'
import './App.css'

function App() {
  const [projects, setProjects] = useState<Project[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadProjects() {
    setLoading(true)
    setError('')
    setProjects(null)

    try {
      const data = await getProjects()
      setProjects(data)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Something went wrong.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <p>YOUR WORK. CONNECTED.</p>
      <h1>TaskWeave</h1>
      <p>Find talent. Plan projects. Deliver together.</p>

      <section aria-labelledby="projects-heading" aria-busy={loading}>
        <h2 id="projects-heading">Projects</h2>

        <button
          type="button"
          onClick={loadProjects}
          disabled={loading}
        >
          {loading ? 'Loading…' : 'Load projects'}
        </button>

        {error && <p role="alert">{error}</p>}

        {projects?.length === 0 && <p>No projects found.</p>}

        {projects?.map((project) => (
          <article key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Budget: BDT {project.budget}</p>
            <p>
              Deadline: <time dateTime={project.deadline}>
                {project.deadline}
              </time>
            </p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App