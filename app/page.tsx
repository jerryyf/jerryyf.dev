import { BlogPosts } from 'app/components/posts'
import { observe } from './lib/observe'
import { TypeWriter } from './components/typewriter'
import { Background } from './components/background'

export default function Page() {
  observe()
  return (
    <section className="flex flex-col justify-between">
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        jerryyf.dev
      </h1>
      <TypeWriter />
      <script src="https://cdn.jsdelivr.net/npm/@tsparticles/preset-links@3/tsparticles.preset.links.min.js"></script>
      <Background />
    </section>
  )
}
