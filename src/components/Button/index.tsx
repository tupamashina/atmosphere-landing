import { clsx } from 'clsx/lite';
import { ButtonHTMLAttributes, createElement, forwardRef } from 'react';

import type { Icon } from '@/icons/create';
import { lhVar, titleTypographyClass } from '@/styles/typography.css';
import * as styles from './styles.css';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: Icon;
  children: string;
  size?: keyof typeof titleTypographyClass;
  variant: keyof typeof styles.buttonVariantClass;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ icon, size = 'md', variant, children, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={clsx(
        styles.buttonClass,
        titleTypographyClass[size],
        styles.buttonVariantClass[variant],
        className,
      )}
      {...props}
    >
      <span aria-hidden className={styles.buttonStateLayerClass} />

      {icon &&
        createElement(icon, {
          size: lhVar,
          'aria-hidden': true,
          className: styles.buttonIconClass,
        })}

      <span className={styles.buttonTextClass}>{children}</span>
    </button>
  ),
);

Button.displayName = 'Button';
