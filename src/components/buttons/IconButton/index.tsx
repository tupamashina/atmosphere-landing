import { Slot, Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx/lite';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

import type { PropsWithAsChild } from '@/components/types';
import type { Icon } from '@/icons/create';
import * as styles from './styles.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

type Variants = NonNullable<RecipeVariants<typeof styles.iconButtonRecipe>>;

export interface IconButtonProps
  extends Variants,
    ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Icon;
}

export const IconButton = forwardRef<
  HTMLButtonElement,
  PropsWithAsChild<IconButtonProps>
>(({ asChild, children, icon: Icon, variant, className, ...props }, ref) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      ref={ref}
      type={asChild ? undefined : 'button'}
      className={clsx(styles.iconButtonRecipe({ variant }), className)}
      {...props}
    >
      <Slottable>{children}</Slottable>
      <Icon aria-hidden className={styles.iconButtonIconClass} />
    </Component>
  );
});

IconButton.displayName = 'IconButton';
