import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda'
import { fromEnv } from '@aws-sdk/credential-providers'

export async function triggerLambda(visitorDetails:Object) {

  // Workaround for Next.js environment variables during build time
  process.env.AWS_ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID
  process.env.AWS_SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
  process.env.LAMBDA_FUNCTION_NAME = process.env.NEXT_PUBLIC_LAMBDA_FUNCTION_NAME

  const client = new LambdaClient({
    credentials: fromEnv(),
    region: process.env.NEXT_PUBLIC_AWS_REGION
  })

  const input = {
    FunctionName: process.env.NEXT_PUBLIC_LAMBDA_FUNCTION_NAME,
    Payload: JSON.stringify(visitorDetails)
  };
  const command = new InvokeCommand(input)
  const response = await client.send(command)
}
