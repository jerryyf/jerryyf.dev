import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda'
import { fromEnv } from '@aws-sdk/credential-providers'

export async function triggerLambda(visitorDetails:Object) {

  const client = new LambdaClient({
    credentials: fromEnv(),
    region: process.env['AWS_REGION']
  })

  const input = {
    FunctionName: process.env['LAMBDA_FUNCTION_NAME'],
    Payload: JSON.stringify(visitorDetails)
  };
  const command = new InvokeCommand(input)
  const response = await client.send(command)
}
