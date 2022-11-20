# Common utils for packages project 

use index.ts as main file 
```json
 "main": "index.js",
```
thus we can simply import the index.ts file and use it as the main file


```ts
import { userApi } from '@conferer/api'

// ths we use index.js as the main file, and we can simply import `@conferer/api`
// import { userApi } from '@conferer/api/src/user'
```
