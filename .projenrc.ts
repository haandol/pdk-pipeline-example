import { monorepo } from "@aws/pdk";
import { AwsCdkTypeScriptApp } from "projen/lib/awscdk";

const project = new monorepo.MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "pdk-pipeline-example",
  projenrcTs: true,
});

new AwsCdkTypeScriptApp({
  devDeps: ["@aws/pdk"],
  parent: project,
  outdir: "packages/infra",
  name: "infra",
  cdkVersion: "2.103.1",
  defaultReleaseBranch: "main",
});

project.synth();
