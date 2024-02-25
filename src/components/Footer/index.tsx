import { icons } from '@/icons';
import { bodyTypographyClass } from '@/styles/typography.css';
import * as styles from './styles.css';

import type { FC } from 'react';

export const Footer: FC = () => (
  <footer className={styles.footerClass}>
    <div>
      <icons.Logo
        aria-hidden
        width="17rem"
        height="2.5rem"
        style={{ marginBottom: '1rem' }}
      />
      &copy; ООО «АТМОСФЕРА» {new Date().getFullYear()}
    </div>

    <div style={{ justifySelf: 'center' }}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eveniet
        ipsa dolorum, ut sit facere!
      </p>

      <div style={{ marginTop: '0.5rem' }}>
        <a href="#" style={{ color: 'inherit' }}>
          Политика конфиденциальности
        </a>

        <a href="#" style={{ color: 'inherit', marginLeft: '1rem' }}>
          Публичная оферта
        </a>
      </div>
    </div>

    <div>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <icons.Phone size="1.25rem" style={{ marginRight: '0.375rem' }} />
        <a href="tel:84956929595" style={{ color: 'inherit' }}>
          8 4956 92-95-95
        </a>
      </span>

      <span
        style={{ display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}
      >
        <icons.Envelope size="1.25rem" style={{ marginRight: '0.375rem' }} />
        <a href="mailto:duma@gov.ru" style={{ color: 'inherit' }}>
          duma@gov.ru
        </a>
      </span>
    </div>
  </footer>
);
