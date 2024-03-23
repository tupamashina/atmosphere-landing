import * as Tooltip from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';
import { CSSProperties, FC, useId } from 'react';

import { icons } from '@/icons';
import { themeVars } from '@/styles/theme.css';
import * as styles from './styles.css';

interface Props {
  label: string;
  tooltip?: string;
  style?: CSSProperties;
  className?: string;
}

export const TextField: FC<Props> = ({ label, tooltip, style, className }) => {
  const inputId = useId();

  return (
    <div
      style={style}
      className={clsx(styles.textFiledContainerClass, className)}
    >
      <input
        id={inputId}
        type="text"
        className={styles.textFieldInputClass}
        style={{ paddingRight: !tooltip ? undefined : '2.75rem' }}
      />

      <label htmlFor={inputId} className={styles.textFieldLabelClass}>
        {label}
      </label>

      {!!tooltip && (
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <icons.Help
                size="1.25rem"
                className={styles.textFieldTooltipTriggerClass}
              />
            </Tooltip.Trigger>

            <Tooltip.Portal>
              <Tooltip.Content
                side="right"
                sideOffset={4}
                className={styles.textFieldTooltipContentClass}
              >
                {tooltip}
                <Tooltip.Arrow
                  width={16}
                  height={8}
                  fill={themeVars.colors.inverseSurface}
                />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      )}
    </div>
  );
};
