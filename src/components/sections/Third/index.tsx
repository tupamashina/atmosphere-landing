import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  Root as TooltipRoot,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import Image from 'next/image';
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type FC,
  type PropsWithChildren,
} from 'react';

import { IS_DEV, IS_PROD } from '@/const';
import { Icons } from '@/icons';
import { themeVars } from '@/styles/theme.css';
import { displayTypographyClass } from '@/styles/typography.css';
import scheme from './scheme.webp';
import * as styles from './styles.css';

const Tooltip: FC<
  PropsWithChildren<Pick<CSSProperties, 'top' | 'left' | 'right' | 'bottom'>>
> = ({ children, ...style }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <TooltipRoot open={open} onOpenChange={setOpen}>
      <TooltipTrigger
        style={style}
        ref={triggerRef}
        className={styles.tooltipTriggerClass}
        onClick={() => setTimeout(() => setOpen(true), 0)}
      >
        <Icons.InfoCircleFill size="2.25rem" />
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          sideOffset={4}
          className={styles.tooltipContentClass}
          onPointerDownOutside={(event) => {
            if (
              (event.target === null || event.target instanceof Node) &&
              triggerRef.current?.contains(event.target)
            )
              event.preventDefault();
          }}
        >
          {children}
          {/* <TooltipArrow className={styles.tooltipArrowClass} /> */}
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  );
};

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
    <TooltipProvider delayDuration={0}>
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
            alt=""
            ref={imgRef}
            src={scheme}
            placeholder="blur"
            draggable={IS_DEV}
            sizes="(min-width: 1304px) 1240px, 100vw"
            className={styles.thirdSectionSchemeClass}
            onContextMenu={(event) => IS_PROD && event.preventDefault()}
          />

          <Tooltip top="20.75%" left="52.375%">
            ТЭЦ централизованно подготавливает теплоноситель с заданными
            одинаковыми параметрами (согласно графику) для городских
            потребителей. Удаленность источника тепла от потребителей и
            особенности цикла выработки тепловой энергии на ТЭЦ делают процесс
            регулирования температуры теплоносителя инертным и недостаточно
            гибким.
          </Tooltip>

          <Tooltip top="63.5%" left="46.625%">
            При разработке автоматического теплового пункта особое внимание
            уделяется количеству абонентов, качеству их работы, а также
            категории производимых в помещениях работ. Эффект экономии от
            внедрения системы автоматического регулирования теплового пункта
            затрагивает всех энергопотребителей: воздушные завесы,
            воздушно-отопительные агрегаты, радиаторные системы отопления
            производственных и административно-бытовых помещений, узлы смешения
            приточных систем вентиляции.
          </Tooltip>

          <Tooltip bottom="8%" left="20%">
            В тепловом пункте происходит регулирование параметров теплоносителя,
            подготовка требуемой в данный момент времени смеси, а также
            распределение теплоносителя по потребителям. Автоматизированный
            тепловой пункт позволяет добиться существенной экономии денежных
            средств, обеспечив эффективное и современное автоматическое
            регулирование температуры и перепадов давления теплоносителя в
            подающем и обратном трубопроводах с учетом погодных условий, режима
            работы предприятия и с применением систем диспетчеризации и
            дистанционного управления. В состав теплового пункта также входит
            узел коммерческого учета тепловой энергии.
          </Tooltip>

          <Tooltip top="27%" left="6.25%">
            Транспортировка теплоносителя от ТЭЦ до предприятия производится по
            наружным тепловым сетям. ТЭЦ обеспечивает предприятие теплоносителем
            с температурой в соответствии с собственным графиком, строго
            зависящим от температуры наружного воздуха. Температура
            теплоносителя по графику ТЭЦ зачастую превышает температуру,
            необходимую для успешного и эффективного обеспечения теплом
            потребителя, что приводит к избыточно высокой температуре в цехах
            предприятия, перерасходу энергоресурсов и завышению температуры
            теплоносителя в обратном трубопроводе.
          </Tooltip>

          <Tooltip bottom="26.5%" right="22%">
            Каждое предприятие обладает своей уникальной системой
            энергопотребления. Не существует универсального решения или методики
            энергосбережения. Поэтому при разработке тепловых пунктов мы
            используем индивидуальный подход к каждому объекту.
          </Tooltip>

          <Tooltip bottom="14.25%" right="38%">
            Теплоноситель от теплового пункта к непосредственным потребителям
            тепла транспортируется по внутренней системе теплоснабжения. При
            разработке проекта теплового пункта особое внимание уделяется
            характерным особенностям каждого потребителя тепла на производстве:
            системам отопления и вентиляции как в производственных цехах, так и
            в административно-бытовых помещениях предприятия.
          </Tooltip>

          <Tooltip bottom="28%" right="5.5%">
            Регулирование теплоносителя в индивидуальном автоматизированном
            тепловом пункте позволяет управлять температурой в помещениях
            различного назначения индивидуально: в производственном цехе и в
            административно-бытовом блоке. Это повышает комфортность условий
            труда и позволяет эффективнее распределять энергоресурсы.
          </Tooltip>

          <Tooltip left="21.5%" bottom="37%">
            Программа для системы автоматизации разрабатывается отдельно для
            каждого предприятия с учетом его основных особенностей
            энергопотребления. С помощью системы автоматизации теплового узла
            обеспечивается:
            <ul>
              {[
                'экономное использование энергоресурсов',
                'достижение точного регулирования выходных параметров',
                'эффективное использование технологического оборудования',
                'увеличение эффективного использования рабочего времени оперативного персонала',
                'быстродействующая противоаварийная защита технологического оборудования',
                'сбор и архивация данных с регистрирующего оборудования',
              ].map((text) => (
                <li key={text} style={{ marginLeft: '0.625rem' }}>
                  {text}
                </li>
              ))}
            </ul>
          </Tooltip>

          <span
            style={{
              position: 'absolute',
              top: '24%',
              left: '52.375%',
              fontWeight: 600,
              fontSize: imgWidth ? imgWidth / 68.888_888_888_888_89 : '1rem',
            }}
          >
            ТЭЦ
          </span>

          <span
            style={{
              position: 'absolute',
              top: '20%',
              left: '38%',
              fontSize: imgWidth ? imgWidth / 62.5 : '1rem',
            }}
          >
            Т<sub>нар</sub> = 5&deg;
          </span>

          <span
            style={{
              position: 'absolute',
              top: '41.25%',
              right: '7.25%',
              fontSize: imgWidth ? imgWidth / 77.5 : '1rem',
            }}
          >
            АБК Т<sub>ВН</sub> = 22&deg;
          </span>

          <span
            style={{
              position: 'absolute',
              top: '54%',
              right: '7.25%',
              fontSize: imgWidth ? imgWidth / 77.5 : '1rem',
            }}
          >
            АБК Т<sub>ВН</sub> = 22&deg;
          </span>

          <span
            style={{
              position: 'absolute',
              top: '66.5%',
              right: '7.25%',
              fontSize: imgWidth ? imgWidth / 77.5 : '1rem',
            }}
          >
            АБК Т<sub>ВН</sub> = 22&deg;
          </span>

          <span
            style={{
              position: 'absolute',
              top: '28.25%',
              left: '10.75%',
              color: themeVars.colors.error,
            }}
          >
            T1 = 70&deg;
          </span>

          <span
            style={{
              position: 'absolute',
              top: '30.75%',
              left: '3.5%',
              color: themeVars.colors.primary,
            }}
          >
            T2 = 45&deg;
          </span>

          <span
            style={{
              position: 'absolute',
              top: '37.25%',
              left: '20.125%',
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
              left: '19.5%',
              bottom: '15.125%',
              fontSize: imgWidth ? imgWidth / 77.5 : '1rem',
            }}
          >
            Тепловой пункт
          </span>

          <span
            style={{
              position: 'absolute',
              bottom: '9.75%',
              left: '10.5%',
              color: themeVars.colors.error,
            }}
          >
            T1 = 70&deg;
          </span>

          <span
            style={{
              position: 'absolute',
              bottom: '5.5%',
              left: '10.5%',
              color: themeVars.colors.primary,
            }}
          >
            T2 = 45&deg;
          </span>

          <span
            style={{
              position: 'absolute',
              bottom: '9%',
              left: '28.75%',
              color: '#F7BB70',
            }}
          >
            T1.1 = 53&deg;
          </span>
        </div>
      </section>
    </TooltipProvider>
  );
};
