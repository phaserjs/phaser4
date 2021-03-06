import typescript from 'rollup-plugin-typescript2';
// import {terser} from "rollup-plugin-terser";

const pkg = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [
        { dir: './dist', format: 'es', sourcemap: true }
    ],
    preserveModules: true,
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
            tsconfig: './tsconfig.es.json',
            useTsconfigDeclarationDir: true
        }),
        //terser()
    ]
};
