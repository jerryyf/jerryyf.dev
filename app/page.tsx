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
      <div className="mt-8 flex flex-wrap gap-4">

        <div className="flex gap-4 mb-4">
          <div className="my-8">
            <CredlyBadge badgeId={"9836a4d5-2be7-4b7f-937b-32eb99e839b3"} />
          </div>
          <div className="my-8">
            <CredlyBadge badgeId={"0a8c9684-b7f1-4376-88f1-7086876e96cb"} />
          </div>
          <div className="my-8">
            <CredlyBadge badgeId={"fb6b9b44-a261-414c-822c-38bab83fef65"} />
          </div>
          <div className="my-8">
            <CredlyBadge badgeId={"d2fedfdd-09ec-4f56-a472-e7e0f9a529eb"} />
          </div>
        </div>
      </div>
    </section>
  )
}
