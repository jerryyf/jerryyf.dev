import { observe } from './lib/observe'
import { TypeWriter } from './components/typewriter'
import { Background } from './components/background'
import CredlyBadge from 'app/components/credlyBadge'

export default function Page() {
  observe()
  return (
    <section className="-scroll-mt-px flex-grow font-mono">
      <Background />
      <h1 className="mt-16 text-4xl font-bold font-mono">
        jerryyf
      </h1>
      <div className="mt-16 font-mono">
        <TypeWriter />
      </div>
      <script src="https://cdn.jsdelivr.net/npm/@tsparticles/preset-links@3/tsparticles.preset.links.min.js"></script>
      <h1 className="mt-32 text-2xl font-semibold font-mono">
        projects
      </h1>
      <div className="mt-8 flex flex-wrap gap-4">
        {/* project 1 */}
        <div className="bg-cyan-400 dark:bg-cyan-900 p-4 border shadow-md w-64 font-mono">
          <a
            className="text-14 font-mono font-semibold flex items-center transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jerryyf/alt"
          >$ alt </a>
          <h3 className="text-14 font-semibold"></h3>
          <p className="text-sm text-white-600">An open framework for local LLM research.</p>
        </div>

        {/* project 2 */}
        <div className="bg-cyan-400 dark:bg-cyan-900 p-4 border shadow-md w-64 font-mono">
          <a
            className="text-14 font-mono font-semibold flex items-center transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jerryyf/home-ops"
          >$ home-ops</a>
          <h3 className="text-14 font-semibold"></h3>
          <p className="text-sm text-white-600">Declarative GitOps for my home infrastructure</p>
        </div>
      </div>
    </section>
  )
}
