import { clsx } from 'clsx/lite';
import { ButtonHTMLAttributes, createElement, forwardRef } from 'react';

import type { Icon } from '@/icons/create';
import * as styles from './styles.css';

import type { Except } from 'type-fest';

export interface Props
  extends Except<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: Icon;
  title: string;
  variant: keyof typeof styles.iconButtonClass;
}

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ icon, variant, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={clsx(styles.iconButtonClass[variant], className)}
      {...props}
    >
      <span aria-hidden className={styles.iconButtonStateLayerClass} />

      {createElement(icon, {
        size: '1.5rem',
        'aria-hidden': true,
        className: styles.iconButtonIconClass,
      })}
    </button>
  ),
);

IconButton.displayName = 'IconButton';
