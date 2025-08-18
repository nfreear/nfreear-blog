/**
 * @see https://github.com/neostandard/neostandard
 */
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard';

export default neostandard({
  ignores: ['js/intensedebate/**', ...resolveIgnoresFromGitignore()],
  semi: true,  // Enforce semicolons (like semistandard)
});
