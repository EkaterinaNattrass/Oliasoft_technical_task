import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default () => {
  const root = process.cwd();

  return {
    base: '/',
    root,
    define: {
      globalThis: 'globalThis',
    },
    publicDir: false,
    emptyOutDir: true,
    server: {
      port: 9001,
      host: true,
    },
    resolve: {
      alias: {
        'server': path.resolve(__dirname, './src/server/'),
        'client': path.resolve(__dirname, './src/client/'),
        'store': path.resolve(__dirname, './src/client/store/'),
      },
    },
    plugins: [
      react(),
    ],
    test: {
      globals: true,
      setupFiles: [
        "./setupVitest.js"
      ]
    },
  };
};
