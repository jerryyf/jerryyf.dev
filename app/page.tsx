import { BlogPosts } from 'app/components/posts'
import { observe } from './lib/observe'
import { TypeWriter } from './components/typewriter'

export default function Page() {
  observe()
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        jerryyf.dev
      </h1>
      <TypeWriter />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
