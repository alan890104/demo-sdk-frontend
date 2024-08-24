# Frontend DEMO with alan-sdk


## Setup 

1. Start a new project with vite and react, ts:
  
```bash
yarn create vite@latest
```

2. Add a `yarnrc.yml` with following content.

    ```yaml
    nodeLinker: node-modules
    ```

3. Add an empty `yarn.lock` file.

    ```bash
    touch yarn.lock
    ```


4. Install the following dependencies (Optional):

```bash
yarn add alan-sdk@latest @ton/ton @ton/crypto @tonconnect/ui-react
```

5. Install rollup for building the project:

```bash
yarn add @rollup/plugin-inject vite-plugin-node-polyfills -D
```

6. Modify `vite.config.ts` to include the following:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
        global: true,
        process: true,
      },
    })],
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
    },
  },
})

```

7. Modify `.gitignore` to include the following:

  ```bash
  node_modules/
  .yarn/
  .yarn/*
  !.yarn/releases
  !.yarn/plugins
  !.yarn/sdks
  !.yarn/versions
  .yarn/cache/
  .yarn/build-state.yml
  .yarn/install-state.gz

  dist/
  *.tsbuildinfo

  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*

  *.js
  *.js.map
  *.d.ts
  *.d.ts.map

  .DS_Store
  Thumbs.db

  .vscode/
  .idea/
  *.suo
  *.ntvs*
  *.njsproj
  *.sln

  .env
  .env.*

  *.tgz
  !rollup.config.js
  ```

6. 