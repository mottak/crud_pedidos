export type Mapping<T> = {
  table: string
  fields: Record<keyof T, string>
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html