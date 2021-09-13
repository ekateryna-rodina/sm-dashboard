export type EnumDictionary<T extends string | number | symbol, U> = {
  [K in T]: U;
};
