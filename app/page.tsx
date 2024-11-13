'use client'

import { BlogPosts } from 'app/components/posts'

import Counter from 'app/lib/counter'
import triggerLambda from 'app/lib/lambda'

export default function Page() {
  triggerLambda()

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        jerryyf.dev
      </h1>
      <p className="mb-4">
        {`Hello from my homelab.`}
      </p>
      <div className="my-8">
        <Counter fontSize={20} />
        {/* <BlogPosts /> */}
      </div>
    </section>
  )
}
