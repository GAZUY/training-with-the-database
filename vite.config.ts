import { resolve } from 'path'

export default {
  base: '/training-with-the-database/',
  build: {
    rollupOptions: {
      input: {

        //  @ts-ignore
        Titul: resolve(__dirname, 'index.html'),
        // // @ts-ignore
        // kino: resolve(__dirname, 'kino.html'),
        // // @ts-ignore
        // yaPic: resolve(__dirname, 'yapic.html'),
      }
    }
  }
}
