import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

// export default defineConfig({
//     // ...

//     base: '',
//     publicDir: "public",
//     build: {
//         minify: 'esbuild',
//         cssMinify: "lightningcss",
//         cssCodeSplit: true,
//         rollupOptions: {
//             input: {
//                 test: resolve(__dirname, 'index.html'),
//                 test2: resolve(__dirname, 'index2.html'),
//             },
//             output: {
//                 // entryFileNames: 'assets/[name].js',
//                 // chunkFileNames: 'libs/[name]-chunk.js',
//                 // assetFileNames: 'assets/[name]-[hash][extname]',
//             }
//         }

//     },

// })

export default defineConfig({
    base: '',
    build: {
        
        cssCodeSplit: false,
        rollupOptions: {
            input: getEntryPoints(),
        },
        outDir: './dist',
    }
});

function getEntryPoints() {
    const entryPoints = [
        {
            input: resolve(__dirname, 'index.html'),
            output: 'dist/test',
        },
        {
            input: resolve(__dirname, 'index2.html'),
            output: 'dist/test2',
        },
        {
            input: resolve(__dirname, 'index3.html'),
            output: 'dist/test3',
        }
    ];

    const entries = {};

    for (const entry of entryPoints) {
        entries[entry.output] = entry.input;
    }

    return entries;
}

