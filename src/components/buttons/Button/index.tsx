import { Slot, Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx/lite';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

import type { PropsWithAsChild } from '@/components/types';
import type { Icon } from '@/icons/create';
import * as styles from './styles.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

type Variants = NonNullable<RecipeVariants<typeof styles.buttonRecipe>>;

type IconPosition = NonNullable<
  RecipeVariants<typeof styles.buttonIconRecipe>
>['position'];

export interface ButtonProps
  extends Variants,
    ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: Icon;
  loading?: boolean;
  iconPosition?: IconPosition;
}

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithAsChild<ButtonProps>
>(
  (
    {
      asChild,
      children,
      loading,
      disabled,
      variant,
      className,
      icon: Icon,
      iconPosition = 'start',
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : 'button'}
        disabled={asChild ? undefined : disabled || loading}
        className={clsx(styles.buttonRecipe({ variant }), className)}
        {...props}
      >
        <Slottable>
          {loading ?
            <span className={styles.buttonSpinnerClass}>
              {Array.from({ length: 3 }, (_, i) => (
                <span key={i} className={styles.buttonSpinnerPartClass} />
              ))}
            </span>
          : children}
        </Slottable>

        {Icon && (
          <Icon
            aria-hidden
            className={styles.buttonIconRecipe({ position: iconPosition })}
          />
        )}
      </Component>
    );
  },
);

Button.displayName = 'Button';
