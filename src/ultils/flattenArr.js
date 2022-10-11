import { omit } from "lodash";

export const flatten = (arr) => {
  if (!arr) return [];

  return arr.reduce(
    (acc, cur) => [
      ...acc,
      ...(cur.path ? [omit(cur, "subMenu")] : []),
      ...flatten(cur.subMenu),
    ],
    []
  );
};
