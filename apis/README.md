# Common api for packages project

use index.ts as main file

```json
 "main": "index.js",
```

thus we can simply import the index.ts file and use it as the main file

```ts
import { findUsers } from '@conferer/util'

// ths we use index.js as the main file, and we can simply import `@conferer/api`
// import { findUsers } from '@conferer/util/src/arrays'
```

## update config

```json
{
  "name": "@conferer/api", //依赖名称
  "version": "0.0.1", // 版本号
  "main": "src/index.ts" // 入口文件
}
```

## monorepo 引入

```json
{
  "dependencies": {
    "@conferer/api": "workspace:*",
    "@conferer/component": "workspace:*",
    "@conferer/util": "workspace:*"
  }
}
```

## could not find npm node_modules

1. 检查 package 的声明是否正常
2. 如果有问题删除 node_modules，重新安装（依赖方操作）
3. 检查 pnpm-workspace.yaml 的声明是否征程
