import { BlogPosts } from 'app/components/posts'
import { observe } from './lib/observe'

export default function Page() {
  observe()
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        jerryyf.dev
      </h1>
      <p className="mb-4">
        {`I am a software engineer. Vim enjoyer. Homelabber.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
