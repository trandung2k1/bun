await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './build',
  target: "bun",
  splitting: true,
  format: 'esm'
});