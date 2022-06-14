import styles from 'rollup-plugin-styles';
import image from 'rollup-plugin-img';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { babel } from '@rollup/plugin-babel';

export default {
    input: './src/index.js',
    output: {
        file: './build/bundle.js',
        format: 'cjs',
    },
    watch: {
        exclude: './node_modules/**',
    },
    plugins: [
        styles(),
        image({ limit: 100000 }),
        serve({
            port: 3000,
            open: true,
            contentBase: './',
        }),
        livereload(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/env'],
        }),
    ],
};
