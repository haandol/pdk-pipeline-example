import { AwsPrototypingChecks, PDKNag } from '@aws/pdk/pdk-nag';
import { ApplicationStage } from './constructs/stage';
import { MyPipelineStack } from './stacks/my-pipline-stack';

/* eslint-disable @typescript-eslint/no-floating-promises */
(async () => {
  const app = PDKNag.app({
    nagPacks: [new AwsPrototypingChecks()],
  });

  const devEnv = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  };

  const devStage = new ApplicationStage(app, 'DevStage', { stageName: 'dev' });

  const pipelineStack = new MyPipelineStack(app, 'MyPipelineStack', {
    env: devEnv,
  });
  pipelineStack.pipeline.addStage(devStage);

  app.synth();
})();
