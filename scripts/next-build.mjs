import { spawn } from 'node:child_process';
import { rmSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = '.next-build';

rmSync(resolve(process.cwd(), distDir), { recursive: true, force: true });
console.log(`[next-build] using distDir: ${distDir}`);

const nextBin = resolve(
  process.cwd(),
  'node_modules',
  'next',
  'dist',
  'bin',
  'next'
);

const child = spawn(process.execPath, [nextBin, 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NEXT_DIST_DIR: distDir,
  },
});

child.on('exit', (code) => {
  process.exit(code ?? 1);
});

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});
