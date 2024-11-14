import CredlyBadge from 'app/components/credlyBadge'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        about
      </h1>
      <p className="mb-4">
        {`Computer Science Graduate.`}
      </p>
      <p className="mb-4">
        {`Certifications:`}
      </p>
      <CredlyBadge badgeId={"9836a4d5-2be7-4b7f-937b-32eb99e839b3"} />
      <div className="my-8">
      </div>
    </section>
  )
}
