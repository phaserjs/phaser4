import typescript from 'rollup-plugin-typescript2';
import {terser} from "rollup-plugin-terser";

const pkg = require('./package.json');

export default {
    input: 'src/index.defaults.ts',
    output: [
        { file: pkg.browser, name: 'Phaser', format: 'iife', sourcemap: true }
    ],
    watch: {
        chokidar: true,
        include: './src/**'
    },
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        typescript({
            typescript: require('typescript'),
            tsconfig: './tsconfig.iife.json',
            useTsconfigDeclarationDir: true
        }),
        //terser()
    ]
};
