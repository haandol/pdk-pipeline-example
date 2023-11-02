# PDK Pipeline example

https://aws.github.io/aws-pdk/getting_started/index.html

```bash
$ npm i -g @aws/pdk
$ pdk install
```

deploy pipeline

```bash
$ cd packages/infra
$ pdk deploy -- --require-approval never
```

push to codecommit

```bash
$ git remote add codecommit codecommit::ap-northeast-2://pdk-pipeline-example
```