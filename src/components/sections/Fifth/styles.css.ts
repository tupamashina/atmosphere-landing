import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { buttonStateLayerColorVar } from '@/components/buttons/styles.css';
import { darkThemeClass, themeVars } from '@/styles/theme.css';
import {
  bodyTypographyClass,
  headlineTypographyClass,
} from '@/styles/typography.css';

export const fifthSectionFormClass = style({
  display: 'grid',
  gridTemplateColumns: '1.5fr 2fr 1.5fr',
  gridTemplateRows: 'repeat(4, max-content)',
  gridAutoFlow: 'column',

  rowGap: '1.25rem',
  alignItems: 'start',

  marginTop: '2rem',

  '@media': {
    '(max-width: 1024px)': { gap: '1.25rem', gridTemplateColumns: '1fr 1fr' },
    '(max-width: 600px)': { gridTemplateColumns: '1fr', gridAutoFlow: 'row' },
  },
});

export const fifthSectionFormInputContainerClass = style({
  position: 'relative',
});

globalStyle(`${fifthSectionFormInputContainerClass} > p`, {
  vars: { [themeVars.lh]: '1.5rem' },

  position: 'absolute',
  top: calc.subtract('50%', '0.625rem'),
  right: '1rem',
  transform: 'translateY(-50%)',

  fontSize: '1rem',
  letterSpacing: '0.03125rem',
  userSelect: 'none',
});

export const fifthSectionFormSubmitBtnContainerClass = style([
  darkThemeClass,
  {
    gridRow: 4,
    gridColumn: '1 / -1',

    '@media': { '(max-width: 600px)': { gridRow: 'auto' } },
  },
]);

globalStyle(`${fifthSectionFormSubmitBtnContainerClass} button`, {
  width: '30%',
  marginLeft: 'auto',

  '@media': {
    '(max-width: 1024px)': {
      width: calc.subtract('50%', '0.625rem'),
      margin: '0 auto',
    },

    '(max-width: 600px)': { width: '100%' },
  },
});

export const fifthSectionFormImgContainerClass = style({
  position: 'relative',

  gridRow: '1 / -1',
  gridColumn: 2,

  height: '100%',

  '@media': { '(max-width: 1024px)': { display: 'none' } },
});

globalStyle(`${fifthSectionFormImgContainerClass} div`, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

globalStyle(`${fifthSectionFormImgContainerClass} div::after`, {
  content: '',
  display: 'block',
  paddingBottom: '100%',
});

globalStyle(`${fifthSectionFormImgContainerClass} img`, {
  objectFit: 'cover',
  borderRadius: '50%',
});

export const fifthSectionFormResultClass = style([
  headlineTypographyClass.sm,
  {
    gridRow: 5,
    gridColumn: '1 / -1',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginTop: '0.75rem',

    fontWeight: 500,
    color: themeVars.colors.onSurface,

    '@media': {
      '(max-width: 600px)': { gridRow: 8 },
    },
  },
]);

globalStyle(`${fifthSectionFormResultClass} p`, {
  position: 'relative',

  marginTop: '0.75rem',
  padding: '0.75rem 1.3125rem',

  fontWeight: 600,
});

globalStyle(`${fifthSectionFormResultClass} p::before`, {
  content: '',

  position: 'absolute',
  top: 0,
  left: 0,

  width: '2rem',
  height: '2rem',

  border: `3px solid ${themeVars.colors.inversePrimary}`,
  borderRight: 'none',
  borderBottom: 'none',
});

globalStyle(`${fifthSectionFormResultClass} p::after`, {
  content: '',

  position: 'absolute',
  right: 0,
  bottom: 0,

  width: '2rem',
  height: '2rem',

  border: `3px solid ${themeVars.colors.inversePrimary}`,
  borderTop: 'none',
  borderLeft: 'none',
});
