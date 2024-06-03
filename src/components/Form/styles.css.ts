import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { layoutPaddingInlineVar } from '@/styles/global.css';
import { themeVars } from '@/styles/theme.css';
import {
  bodyTypographyClass,
  headlineTypographyClass,
  titleTypographyClass,
} from '@/styles/typography.css';
import {
  textFieldLabelBackgroundColorVar,
  textFieldLabelClass,
} from '../TextField/styles.css';

export const formClass = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(auto, 37.5rem)',
  justifyContent: 'center',
  gap: '2rem',

  marginInline: calc.negate(layoutPaddingInlineVar),
  padding: `1.5rem ${layoutPaddingInlineVar}`,

  color: themeVars.colors.onPrimaryContainer,
  backgroundColor: themeVars.colors.primaryContainer,

  '@media': {
    '(min-width: 1100px)': {
      gridTemplateColumns: '1fr 1.25fr',
      paddingBlock: '2rem',
    },
  },
});

export const formTitleClass = style([
  headlineTypographyClass.lg,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    fontWeight: 400,

    '@media': {
      '(min-width: 1100px)': { textAlign: 'left' },
    },
  },
]);

export const formSubtitleClass = style([
  titleTypographyClass.lg,
  {
    display: 'block',
    marginTop: '0.25rem',

    '@media': {
      '(min-width: 1100px)': { marginTop: '0.5rem' },
    },
  },
]);

export const formFormClass = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1rem',

  '@media': {
    '(min-width: 1100px)': {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'max-content max-content',
      gridAutoFlow: 'column',
    },
  },
});

globalStyle(`${formFormClass} ${textFieldLabelClass}`, {
  vars: {
    [textFieldLabelBackgroundColorVar]: themeVars.colors.primaryContainer,
  },
});

export const formFormSubmitButtonClass = style({ alignSelf: 'end' });

export const formFormTermsClass = style([
  bodyTypographyClass.sm,
  {
    alignSelf: 'start',
    marginTop: '-0.5rem',

    '@media': { '(min-width: 1100px)': { marginTop: 0 } },
  },
]);

globalStyle(`${formFormTermsClass} > a`, { color: 'inherit' });
