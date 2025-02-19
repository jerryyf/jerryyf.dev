import CredlyBadge from 'app/components/credlyBadge'

// test CI

export const metadata = {
  title: 'about',
  description: 'About me.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">about</h1>
      <p className="mb-4">
        {`Graduate: Computer Science - Security Engineering`}
      </p>
      <div className="my-8">
        <CredlyBadge badgeId={"9836a4d5-2be7-4b7f-937b-32eb99e839b3"} />
      </div>
      <p className="mb-4">
        {`Email: contact [at] jerryyf [dot] dev`}
      </p>
    </section>
  )
}
