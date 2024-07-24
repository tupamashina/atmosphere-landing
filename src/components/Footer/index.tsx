import Link from 'next/link';

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
        С 2010 года помогли сэкономить более 13 миллиардов рублей, и эта цифра
        продолжает расти
      </p>

      <div>
        <Link href="/privacy">Политика конфиденциальности</Link>
      </div>
    </div>

    <div>
      <span>
        <Icons.Phone size="1.25rem" />
        <a href="tel:88002223163">8 (800) 222-31-63</a>
      </span>

      <span>
        <Icons.Phone size="1.25rem" />
        <a href="tel:+79270282507">+7 (927) 028-25-07</a>
      </span>

      <span>
        <Icons.Envelope size="1.25rem" />
        <a href="mailto:zakaz@atm-itp.ru">zakaz@atm-itp.ru</a>
      </span>
    </div>
  </footer>
);
