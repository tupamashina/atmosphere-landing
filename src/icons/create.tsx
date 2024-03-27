import { clsx } from 'clsx';
import {
  forwardRef,
  type CSSProperties,
  type ReactNode,
  type SVGAttributes,
} from 'react';

type SVGAttrs = SVGAttributes<SVGSVGElement>;

interface IconStylingProps
  extends Pick<CSSProperties, Extract<keyof SVGAttrs, keyof CSSProperties>> {
  size?: CSSProperties['width'] & CSSProperties['height'];
}

export interface IconProps
  extends IconStylingProps,
    Omit<SVGAttrs, 'xmlns' | 'children' | keyof IconStylingProps> {
  title?: string;
}

export function createIcon(defaultProps: IconProps, children: ReactNode) {
  // eslint-disable-next-line react/display-name
  return forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const {
      title,
      size = '1.5rem',

      mask,
      fillRule,
      strokeLinecap,
      strokeLinejoin,
      alignmentBaseline,

      ...mergedProps
    } = { ...defaultProps, ...props };

    mergedProps.display ??= 'block';
    mergedProps.width ??= size;
    mergedProps.height ??= size;

    mergedProps.strokeWidth ??= 0;
    mergedProps.color ??= 'inherit';
    mergedProps.fill ??= 'currentColor';
    mergedProps.stroke ??= 'currentColor';

    mergedProps.style = { ...defaultProps.style, ...props.style };
    mergedProps.className = clsx(defaultProps.className, props.className);

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        mask={typeof mask === 'number' ? `${mask}px` : mask}
        fillRule={fillRule as SVGAttrs['fillRule']}
        strokeLinecap={strokeLinecap as SVGAttrs['strokeLinecap']}
        strokeLinejoin={strokeLinejoin as SVGAttrs['strokeLinejoin']}
        alignmentBaseline={alignmentBaseline as SVGAttrs['alignmentBaseline']}
        {...mergedProps}
      >
        {children}
        {!!title && <title>{title}</title>}
      </svg>
    );
  });
}

export type Icon = ReturnType<typeof createIcon>;
