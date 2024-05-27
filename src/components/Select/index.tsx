import { clsx } from 'clsx/lite';
import {
  forwardRef,
  type OptionHTMLAttributes,
  type SelectHTMLAttributes,
} from 'react';

import { useComposedRef } from '@/hooks/useComposedRef';
import { useId } from '@/hooks/useId';
import { Icons } from '@/icons';
import * as styles from './styles.css';

import type { SetRequired } from 'type-fest';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SetRequired<OptionHTMLAttributes<HTMLOptionElement>, 'value'>[];
}

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ label, options, id: idProp, className, ...props }, forwardedRef) => {
    const id = useId(idProp);
    const ref = useComposedRef(forwardedRef);

    return (
      <div className={styles.selectContainerClass}>
        <select
          id={id}
          ref={ref}
          className={clsx(styles.selectClass, className)}
          {...props}
        >
          {options.map((optionProps) => (
            <option key={optionProps.value.toString()} {...optionProps} />
          ))}
        </select>

        <label htmlFor={id} className={styles.selectLabelClass}>
          {label}
        </label>

        <Icons.ArrowDropDown
          aria-hidden
          size="1.5rem"
          className={styles.selectIndicatorClass}
        />
      </div>
    );
  },
);

Select.displayName = 'Select';

// export const Select: FC<Props> = ({ label, options, ...props }) => {
//   const selectId = useId();

//   return (
//     <div className={styles.selectContainerClass}>
//       <select id={selectId} className={styles.selectClass}>
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>

//       <label htmlFor={selectId} className={styles.selectLabelClass}>
//         {label}
//       </label>

//       <Icons.ChevronDown
//         aria-hidden
//         size="1rem"
//         className={styles.selectIndicatorClass}
//       />
//     </div>
//   );
// };
