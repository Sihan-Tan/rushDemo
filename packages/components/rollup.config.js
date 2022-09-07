import pkgJson from './package.json';
import swc from 'rollup-plugin-swc';
import swcConfig from '../../.swcrc.json';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    format: 'esm',
    file: pkgJson.module,
  },
  plugins: [
    swc({
      ...swcConfig,
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};
