# Common api for packages project 

use index.ts as main file 
```json
 "main": "index.js",
```
thus we can simply import the index.ts file and use it as the main file


```ts
  import { findUsers } from '@conferer/utils'

// ths we use index.js as the main file, and we can simply import `@conferer/api`
// import { findUsers } from '@conferer/utils/src/arrays'
```
