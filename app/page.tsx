
import { BlogPosts } from 'app/components/posts'

import { triggerLambda } from './lib/lambda'
import { headers } from 'next/headers'

export default function Page() {
  const headersList = headers()
  const ip = headersList.get('x-forwarded-for') || ''
  async function geo() {
    'use server'
    const url = 'http://ip-api.com/json'
    let res = await fetch(url + '/' + ip)
    let data = await res.json()
    if (data.status != 'fail') {
      let payload = {
        status: data.status,
        country: data.country,
        region: data.regionName,
        city: data.city,
        zip: data.zip,
        lat: data.lat,
        lon: data.lon,
        timezone: data.timezone,
        isp: data.isp,
        org: data.org,
        ip: data.query
      }
      triggerLambda(payload)
    }
    else {
      triggerLambda({
        status: data.status,
        ip: ip,
      })
    }
  }
  geo()

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
