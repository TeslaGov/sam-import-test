import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';

// To make `sam build` work:
// 1. comment the import line above
// 2. comment the entire `thisWillNotWork` function

export const lambdaHandler = (): Promise<string | undefined> => {
    return Promise.resolve('hello world');
};

async function thisWillNotWork() {
    const client = new SSMClient({ region: 'us-west-1' });
    const cmd = new GetParameterCommand({
        Name: 'some-param-name',
    });
    const param = await client.send(cmd)

    return param.Parameter?.Value;
}
