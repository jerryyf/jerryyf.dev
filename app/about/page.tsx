import dynamic from 'next/dynamic'
 
const Badges = dynamic(() => import('../components/badges'), { ssr: false })

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        about
      </h1>
      <p className="mb-4">
        {`Certifications:`}
      </p>
      <Badges />
      <div className="my-8">
      </div>
    </section>
  )
}
