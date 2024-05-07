import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef, useState, type FC } from 'react';

import { themeVars } from '@/styles/theme.css';
import { displayTypographyClass } from '@/styles/typography.css';
import scheme from './scheme.webp';
import * as styles from './styles.css';

export const ThirdSection: FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgWidth, setImgWidth] = useState<number>();

  (typeof window === 'undefined' ? useEffect : useLayoutEffect)(() => {
    if (!imgRef.current) return;

    const observer = new ResizeObserver(([entry]) =>
      setImgWidth(entry?.contentRect.width),
    );

    observer.observe(imgRef.current);
    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, []);

  return (
    <section id="scheme">
      <h3 className={displayTypographyClass.sm}>КАК ЭТО РАБОТАЕТ?</h3>

      <p className={styles.thirdSectionSubtitleClass}>
        Проиллюстрировано на схеме
      </p>

      <div
        style={{
          position: 'relative',
          fontWeight: 500,
          fontSize: imgWidth ? imgWidth / 88.571_428_571_428_57 : '0.875rem',
        }}
      >
        <Image
          ref={imgRef}
          alt=""
          src={scheme}
          quality={100}
          placeholder="blur"
          className={styles.thirdSectionSchemeClass}
        />

        <span
          style={{
            position: 'absolute',
            top: '17.5%',
            left: '56%',
            fontWeight: 600,
            fontSize: imgWidth ? imgWidth / 68.888_888_888_888_89 : '1rem',
          }}
        >
          ТЭЦ
        </span>

        <span
          style={{
            position: 'absolute',
            top: '17.5%',
            left: '27.5%',
            fontSize: imgWidth ? imgWidth / 77.5 : '1rem',
          }}
        >
          Т<sub>нар</sub> = 5&deg;
        </span>

        <span
          style={{
            position: 'absolute',
            top: '44.375%',
            right: '8.25%',
            fontSize: imgWidth ? imgWidth / 77.5 : '1rem',
          }}
        >
          АБК Т<sub>ВН</sub> = 22&deg;
        </span>

        <span
          style={{
            position: 'absolute',
            top: '63.5%',
            right: '8.25%',
            fontSize: imgWidth ? imgWidth / 77.5 : '1rem',
          }}
        >
          АБК Т<sub>ВН</sub> = 22&deg;
        </span>

        <span
          style={{
            position: 'absolute',
            top: '29%',
            left: '12%',
            color: themeVars.colors.error,
          }}
        >
          T1 = 70&deg;
        </span>

        <span
          style={{
            position: 'absolute',
            top: '31.5%',
            left: '5.25%',
            color: themeVars.colors.primary,
          }}
        >
          T2 = 45&deg;
        </span>

        <span
          style={{
            position: 'absolute',
            top: '37.5%',
            left: '21.375%',
            fontSize: imgWidth ? imgWidth / 77.5 : '1rem',
          }}
        >
          Венткамера
        </span>

        <span
          style={{
            position: 'absolute',
            top: '51.75%',
            left: '52.5%',
            fontSize: imgWidth ? imgWidth / 77.5 : '1rem',
          }}
        >
          Цех Т<sub>ВН</sub> = 18&deg;
        </span>

        <span
          style={{
            position: 'absolute',
            left: '21%',
            bottom: '15.75%',
            fontSize: imgWidth ? imgWidth / 77.5 : '1rem',
          }}
        >
          Тепловой пункт
        </span>

        <span
          style={{
            position: 'absolute',
            bottom: '10.75%',
            left: '12.125%',
            color: themeVars.colors.error,
          }}
        >
          T1 = 70&deg;
        </span>

        <span
          style={{
            position: 'absolute',
            bottom: '6.5%',
            left: '12.125%',
            color: themeVars.colors.primary,
          }}
        >
          T2 = 45&deg;
        </span>

        <span
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '29.75%',
            color: '#F7BB70',
          }}
        >
          T1.1 = 53&deg;
        </span>
      </div>
    </section>
  );
};
