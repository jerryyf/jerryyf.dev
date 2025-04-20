import CredlyBadge from 'app/components/credlyBadge'

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
      <div className="flex gap-4 mb-4">
        <div className="my-8">
          <CredlyBadge badgeId={"9836a4d5-2be7-4b7f-937b-32eb99e839b3"} />
        </div>
        <div className="my-8">
          <CredlyBadge badgeId={"0a8c9684-b7f1-4376-88f1-7086876e96cb"} />
        </div>
      </div>
      <p className="mb-4">
        {`Email: contact [at] jerryyf [dot] dev`}
      </p>
    </section>
  )
}
