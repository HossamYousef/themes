import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/sass/theme.scss', 'resources/js/theme.js'],
            refresh: true,
        }),
    ],
});