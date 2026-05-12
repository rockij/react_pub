import { execFileSync, spawn } from 'node:child_process';
import { rmSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = '.next-build';

const hasRunningNextDev = () => {
  if (process.platform !== 'win32') {
    return false;
  }

  try {
    const output = execFileSync(
      'powershell.exe',
      [
        '-NoProfile',
        '-Command',
        "Get-CimInstance Win32_Process | Where-Object { $_.Name -eq 'node.exe' -and $_.CommandLine -like '*D:\\workspace\\react_pub*next*dev*' } | Select-Object -ExpandProperty ProcessId",
      ],
      { encoding: 'utf8' }
    );

    return output
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(Boolean).length > 0;
  } catch {
    return false;
  }
};

if (hasRunningNextDev()) {
  console.error('[next-build] next dev is running in this workspace. Stop the dev server before running npm run build.');
  process.exit(1);
}

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
