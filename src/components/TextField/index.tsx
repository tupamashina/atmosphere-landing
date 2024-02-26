import { CSSProperties, FC, useId } from 'react';

import * as styles from './styles.css';

interface Props {
  label: string;
  style?: CSSProperties;
}

export const TextField: FC<Props> = ({ label, style }) => {
  const inputId = useId();

  return (
    <div style={style} className={styles.textFiledContainerClass}>
      <input id={inputId} type="text" className={styles.textFieldInputClass} />

      <label htmlFor={inputId} className={styles.textFieldLabelClass}>
        {label}
      </label>
    </div>
  );
};
