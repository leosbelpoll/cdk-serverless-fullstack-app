import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigateway from "@aws-cdk/aws-apigateway";
import { HitCounter } from "./hitCounter";

export class CdkServerlessFullstackAppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler",
    });

    const hitCounter = new HitCounter(this, "HelloHitCounter", {
      downstream: hello,
    });

    new apigateway.LambdaRestApi(this, "HelloApiGateway", {
      handler: hitCounter.handler,
    });
  }
}
