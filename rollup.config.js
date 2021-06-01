import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

// const external = Object.keys(pkg.dependencies).concat(['path', 'fs', 'typescript']);

export default {
  input: 'src/app.ts',
  plugins: [typescript({ sourceMap: false })],
  output: [
    { format: 'cjs', file: "./dist/app.js", exports: 'auto' },
    { format: 'esm', file: "./dist/app1.js" },
    {format: 'umd', file: "./dist/app2.js", name: "dataStructure"}
  ]
}
