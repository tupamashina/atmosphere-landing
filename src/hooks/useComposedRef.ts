import { createRef, useMemo, type MutableRefObject, type Ref } from 'react';

export function useComposedRef<T>(...refs: Ref<T>[]) {
  const nonNullableRefs = refs.filter(Boolean) as NonNullable<Ref<T>>[];

  return useMemo(() => {
    const composedRef = createRef<T>();
    const nonNullableRefsLength = nonNullableRefs.length;

    if (nonNullableRefsLength === 0) return composedRef;

    if (nonNullableRefsLength === 1 && typeof nonNullableRefs[0] === 'object')
      return nonNullableRefs[0];

    return new Proxy(composedRef, {
      set(...args) {
        const value = args[2] as T;

        for (const ref of nonNullableRefs)
          if (typeof ref === 'function') ref(value);
          else (ref as MutableRefObject<T>).current = value;

        return Reflect.set(...args);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, nonNullableRefs);
}
