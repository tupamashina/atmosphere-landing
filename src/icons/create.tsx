import { clsx } from 'clsx/lite';
import { CSSProperties, SVGAttributes, forwardRef } from 'react';

import type { Except } from 'type-fest';

type SVGProps = SVGAttributes<SVGSVGElement>;

interface IconStylingProps
  extends Pick<CSSProperties, Extract<keyof CSSProperties, keyof SVGProps>> {
  size?: CSSProperties['width'] & CSSProperties['height'];
}

export interface IconProps
  extends IconStylingProps,
    Omit<SVGProps, keyof IconStylingProps> {
  title?: string;
}

export function createIconComponent(
  defaultProps: Except<IconProps, 'children'>,
  children: IconProps['children'],
) {
  // eslint-disable-next-line react/display-name
  return forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const {
      title,
      size = '1rem',

      mask,
      fillRule,
      strokeLinecap,
      strokeLinejoin,
      alignmentBaseline,

      ...mergedProps
    } = { ...defaultProps, ...props };

    mergedProps.width ??= size;
    mergedProps.height ??= size;
    mergedProps.display ??= 'block';

    mergedProps.strokeWidth ??= 0;
    mergedProps.color ??= 'inherit';
    mergedProps.fill ??= 'currentColor';
    mergedProps.stroke ??= 'currentColor';

    mergedProps.style = { ...defaultProps.style, ...props.style };
    mergedProps.className = clsx(defaultProps.className, props.className);

    return (
      <svg
        ref={ref}
        fillRule={fillRule as SVGProps['fillRule']}
        mask={typeof mask === 'number' ? `${mask}px` : mask}
        strokeLinecap={strokeLinecap as SVGProps['strokeLinecap']}
        strokeLinejoin={strokeLinejoin as SVGProps['strokeLinejoin']}
        alignmentBaseline={alignmentBaseline as SVGProps['alignmentBaseline']}
        {...mergedProps}
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {children}
      </svg>
    );
  });
}

export type Icon = ReturnType<typeof createIconComponent>;
