#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkServerlessFullstackAppStack } from '../lib/cdk-serverless-fullstack-app-stack';

const app = new cdk.App();
new CdkServerlessFullstackAppStack(app, 'CdkServerlessFullstackAppStack');
