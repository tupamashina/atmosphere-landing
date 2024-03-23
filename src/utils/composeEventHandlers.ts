import { type SyntheticEvent } from 'react';

export function composeEventHandlers<E extends Event | SyntheticEvent>(
  originalHandler: ((event: E) => void) | undefined,
  additionalHandler: ((event: E) => void) | undefined,
  ignorePreventDefault?: boolean,
) {
  return (event: E) => {
    originalHandler?.(event);

    if (ignorePreventDefault || !event.defaultPrevented)
      additionalHandler?.(event);
  };
}
