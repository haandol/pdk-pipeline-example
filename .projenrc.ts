import { monorepo } from "@aws/pdk";
import { javascript } from "projen";
import { AwsCdkTypeScriptApp } from "projen/lib/awscdk";

const project = new monorepo.MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "pdk-pipeline-example",
  projenrcTs: true,
});

new AwsCdkTypeScriptApp({
  parent: project,
  outdir: "packages/infra",
  name: "infra",
  cdkVersion: "2.103.1",
  defaultReleaseBranch: "main",
  packageManager: javascript.NodePackageManager.NPM,
});

project.synth();
