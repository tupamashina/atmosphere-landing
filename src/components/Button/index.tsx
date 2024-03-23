import { clsx } from 'clsx/lite';
import { ButtonHTMLAttributes, createElement, forwardRef } from 'react';

import type { Icon } from '@/icons/create';
import { lhVar, titleTypographyClass } from '@/styles/typography.css';
import * as styles from './styles.css';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: Icon;
  children: string;
  loading?: boolean;
  size?: keyof typeof titleTypographyClass;
  variant: keyof typeof styles.buttonVariantClass;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      icon,
      size = 'md',
      variant,
      children,
      loading,
      disabled,
      className,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type="button"
      disabled={disabled || loading}
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
          'aria-hidden': true,
          className: styles.buttonIconClass,
        })}

      {!loading ?
        <span className={styles.buttonTextClass}>{children}</span>
      : <span className={styles.buttonSpinnerClass}>
          {Array.from({ length: 3 }, (_, i) => (
            <span key={i} className={styles.buttonSpinnerPartClass} />
          ))}
        </span>
      }
    </button>
  ),
);

Button.displayName = 'Button';
