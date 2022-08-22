import { ESLint } from "eslint";

async function linter() {
  await (async function main() {
    const srcFilesToLint = `./src/**/*.{svelte,ts}`;
    const docfilesToLint = `./docs_src/**/*.{svelte,ts}`;
    const eslint = new ESLint({
      cache: true,
      cacheStrategy: "content",
      fix: true,
    });

    // 2. Lint files. This doesn't modify target files.
    const results = await eslint.lintFiles([srcFilesToLint, docfilesToLint]);

    // 3. Modify the files with the fixed code.
    await ESLint.outputFixes(results);

    // 4. Format the results.
    const formatter = await eslint.loadFormatter("stylish");
    const resultText = formatter.format(results);

    const hasErrors = results.find((res) => res.errorCount > 0);

    if (hasErrors) {
      // 5. Output it.
      // eslint-disable-next-line no-console
      console.log(resultText);

      process.exit(1);
    } else {
      console.log("Passed");
    }
  })().catch((error) => {
    process.exitCode = 1;
    console.error(error);
  });
}

linter();
