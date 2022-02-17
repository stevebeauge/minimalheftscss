# minimalheftscss : reproductible issue with SCSS modules and Heft

# How to repro

1. Ensure pnpm is available on your computer
2. run `pnpm run build`

Expected : compiled react component library, which inclues css in js pattern.

Observed : not compiling. Output `src/MyComponent.tsx:2:20 - (TS2307) Cannot find module './MyComponent.module.scss' or its corresponding type declarations`
