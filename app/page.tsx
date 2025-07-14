import { observe } from './lib/observe'
import { TypeWriter } from './components/typewriter'
import { Background } from './components/background'
import CredlyBadge from 'app/components/credlyBadge'

export default function Page() {
  observe()
  return (
    <section className="-scroll-mt-px flex-grow font-mono">
      <Background />
      <h1 className="mt-32 text-4xl font-bold font-mono">
        jerryyf
      </h1>
      <div className="mt-16 font-mono">
        <TypeWriter />
      </div>
      <script src="https://cdn.jsdelivr.net/npm/@tsparticles/preset-links@3/tsparticles.preset.links.min.js"></script>
      <h1 className="mt-64 text-2xl font-semibold font-mono">
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
          <p className="text-sm text-white-600">Declarative GitOps for my home infrastructure (private repo for now)</p>
        </div>
      </div>
      <div>
        <h1 className="mt-64 text-2xl font-semibold font-mono">
          about
        </h1>
        <p className="mt-8">
          Bachelor of Computer Science - Security Engineering
        </p>
        <p className="mt-8">
          Certifications:
        </p>
        <div className="flex gap-4 mb-4">
          <div className="my-8">
            <CredlyBadge badgeId={"9836a4d5-2be7-4b7f-937b-32eb99e839b3"} />
          </div>
          <div className="my-8">
            <CredlyBadge badgeId={"0a8c9684-b7f1-4376-88f1-7086876e96cb"} />
          </div>
        </div>
        <h1 className="mt-64 text-2xl font-semibold font-mono">
          contact
        </h1>
        <p className="mt-8">
          Email: contact [at] jerryyf [dot] dev
        </p>
      </div>
    </section>
  )
}
