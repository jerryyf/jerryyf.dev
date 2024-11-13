import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda'
import AWS from 'aws-sdk'
import { fromEnv } from '@aws-sdk/credential-providers'
import { getVisitor } from './visitor';

export default async function triggerLambda() {
  const visitorDetails = getVisitor()
  console.log(visitorDetails)

  // let config = new AWS.Config({
  //   accessKeyId: process.env['AWS_ACCESS_KEY_ID'],
  //   secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
  //   region: process.env['AWS_REGION']
  // })

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
  console.log(response)
}

    // country: visitorDetails['country'],
    // city: visitorDetails['city'],
    // isp: visitorDetails['isp'],
    // ip: visitorDetails['ip'],