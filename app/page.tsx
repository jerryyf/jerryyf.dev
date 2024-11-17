import { BlogPosts } from 'app/components/posts'
import { observe } from './lib/observe'
import { TypeWriter } from './components/typewriter'
import { Background } from './components/background'

export default function Page() {
  observe()
  return (
    <section className="mt-20">
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        jerryyf.dev
      </h1>
      <TypeWriter />
      <p className="mt-8 text-lg italic">served from my homelab</p>
      <script src="https://cdn.jsdelivr.net/npm/@tsparticles/preset-links@3/tsparticles.preset.links.min.js"></script>
      <Background />
    </section>
  )
}
