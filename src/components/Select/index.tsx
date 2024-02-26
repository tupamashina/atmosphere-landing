import { CSSProperties, FC, useId } from 'react';

import { icons } from '@/icons';
import * as styles from './styles.css';

interface Props {
  label: string;
  options: string[];
  style?: CSSProperties;
}

export const Select: FC<Props> = ({ label, options, style }) => {
  const selectId = useId();

  return (
    <div style={style} className={styles.selectContainerClass}>
      <select id={selectId} className={styles.selectClass}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor={selectId} className={styles.selectLabelClass}>
        {label}
      </label>

      <icons.ChevronDown
        aria-hidden
        size="0.875rem"
        className={styles.selectIndicatorClass}
      />
    </div>
  );
};
