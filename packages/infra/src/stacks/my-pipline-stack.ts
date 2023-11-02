import { PDKPipeline } from '@aws/pdk/pipeline';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyPipelineStack extends Stack {
  readonly pipeline: PDKPipeline;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.pipeline = new PDKPipeline(this, 'Pipeline', {
      defaultBranchName: 'main',
      primarySynthDirectory: 'packages/infra/cdk.out',
      repositoryName: 'pdk-pipeline-example',
      synthShellStepPartialProps: {
        commands: [
          'cd packages/infra',
          'yarn install',
          'npx cdk synth',
        ],
      },
    });
  }
}
