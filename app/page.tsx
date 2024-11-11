import { BlogPosts } from 'app/components/posts'

import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda'
import { fromEnv } from '@aws-sdk/credential-providers'

const visitorDetails = {
  "country": null,
  "city": null,
  "isp": null,
  "ip": null
}

async function getVisitorDetails() {
  const url = 'http://ip-api.com/json';
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Response status: ${resp.status}`)
    }

    const json = await resp.json();
    console.log(json);
    visitorDetails.country = json.country;
    visitorDetails.city = json.city;
    visitorDetails.isp = json.isp;
    visitorDetails.ip = json.query;

  } catch (error) {
    console.log(error.message);
  }
}

export default async function Page() {

  await getVisitorDetails();
  const client = new LambdaClient({
    credentials: fromEnv()
  });
  const input = {
  FunctionName: process.env['LAMBDA_FUNCTION_NAME'],
  Payload: JSON.stringify(visitorDetails)
};
const command = new InvokeCommand(input);
const response = await client.send(command);

console.log(response);


  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        jerryyf.dev
      </h1>
      <p className="mb-4">
        {`Welcome to my blog. Served from my homelab.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
