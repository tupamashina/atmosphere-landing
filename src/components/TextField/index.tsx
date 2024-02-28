import * as Tooltip from '@radix-ui/react-tooltip';
import { CSSProperties, FC, useId } from 'react';

import { icons } from '@/icons';
import { themeVars } from '@/styles/theme.css';
import * as styles from './styles.css';

interface Props {
  label: string;
  tooltip: string;
  style?: CSSProperties;
}

export const TextField: FC<Props> = ({ label, tooltip, style }) => {
  const inputId = useId();

  return (
    <div style={style} className={styles.textFiledContainerClass}>
      <input id={inputId} type="text" className={styles.textFieldInputClass} />

      <label htmlFor={inputId} className={styles.textFieldLabelClass}>
        {label}
      </label>

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
    </div>
  );
};
