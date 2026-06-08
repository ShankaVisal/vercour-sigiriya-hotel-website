import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const nextBin = require.resolve('next/dist/bin/next');

const hasBrokenNodeLocalStorage =
  'localStorage' in globalThis &&
  typeof globalThis.localStorage?.getItem !== 'function';

const nodeArgs = [];

if (hasBrokenNodeLocalStorage) {
  nodeArgs.push('--no-experimental-webstorage');
}

const child = spawn(
  process.execPath,
  [...nodeArgs, nextBin, 'dev', '--turbopack', '-p', '9002'],
  {
    stdio: 'inherit',
    env: process.env,
  }
);

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
