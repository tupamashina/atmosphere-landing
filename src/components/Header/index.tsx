import { FC, useSyncExternalStore } from 'react';

import { icons } from '@/icons';
import { themeVars } from '@/styles/theme.css';
import { IconButton } from '../IconButton';
import * as styles from './styles.css';

const subscribeToWindowScroll: Parameters<typeof useSyncExternalStore>[0] = (
  onStoreChange,
) => {
  window.addEventListener('scroll', onStoreChange);
  return () => window.removeEventListener('scroll', onStoreChange);
};

export const Header: FC = () => {
  const isScrolled = useSyncExternalStore(
    subscribeToWindowScroll,
    () => window.scrollY > 0,
    () => false,
  );

  return (
    <header className={styles.headerClass}>
      <p className={styles.headerSloganClass}>
        Поможем снизить затраты на тепловую энергию на 27%
      </p>

      <h1 className={styles.headerTitleClass}>
        Атмосфера - энергия эффективности
        <icons.Logo
          aria-hidden
          width="20.5rem"
          height="3rem"
          color={themeVars.colors.onSurface}
        />
      </h1>

      <div className={styles.headerContactInfoClass}>
        <div>
          <a href="tel:84956929595" className={styles.contactLinkClass.tel}>
            8 4956 92-95-95
          </a>

          <a href="mailto:duma@gov.ru" className={styles.contactLinkClass.mail}>
            duma@gov.ru
          </a>
        </div>

        <IconButton title="" variant="filled" icon={icons.PhoneIncoming} />
      </div>
    </header>
  );
};
