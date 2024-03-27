import { useId, type FC } from 'react';

import { Icons } from '@/icons';
import * as styles from './styles.css';

interface Props {
  label: string;
  options: string[];
}

export const Select: FC<Props> = ({ label, options }) => {
  const selectId = useId();

  return (
    <div className={styles.selectContainerClass}>
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

      <Icons.ChevronDown
        aria-hidden
        size="0.875rem"
        className={styles.selectIndicatorClass}
      />
    </div>
  );
};
