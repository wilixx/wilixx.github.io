import type { Config, Result } from './replay-types';
/** Total reservation on one directed physical link, including repeated traversals. */
export function linkLoad(result: Result, c: Config, u: number, v: number) {
  return result.path
    .slice(0, -1)
    .reduce(
      (sum, node, i) =>
        sum +
        (node === u && result.path[i + 1] === v
          ? c.rate *
            (!result.raw && i >= result.encIndex && i < result.decIndex
              ? c.sigma
              : 1)
          : 0),
      0,
    );
}
