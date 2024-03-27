import { Icons } from '@/icons';
import * as styles from './styles.css';

import type { FC } from 'react';

export const Footer: FC = () => (
  <footer className={styles.footerClass}>
    <div>
      <Icons.Logo aria-hidden width="17rem" height="2.5rem" />
      &copy; ООО «АТМОСФЕРА» {new Date().getFullYear()}
    </div>

    <div>
      <p>
        С 2010 года помогли сэкономить более 2 миллиардов рублей, и эта цифра
        продолжает расти
      </p>

      <div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Политика конфиденциальности</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Публичная оферта</a>
      </div>
    </div>

    <div>
      <span>
        <Icons.Phone size="1.25rem" />
        <a href="tel:84956929595">8 4956 92-95-95</a>
      </span>

      <span>
        <Icons.Envelope size="1.25rem" />
        <a href="mailto:duma@gov.ru">duma@gov.ru</a>
      </span>
    </div>
  </footer>
);
