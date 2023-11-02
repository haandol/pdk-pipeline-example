import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyLambdaStack } from '../stacks/my-lambda-stack';

export class ApplicationStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    new MyLambdaStack(this, 'MyLambdaStack');
  }
}
