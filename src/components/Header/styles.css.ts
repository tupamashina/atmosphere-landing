import {
  globalStyle,
  keyframes,
  style,
  styleVariants,
} from '@vanilla-extract/css';

import { layoutPaddingInlineVar } from '@/styles/global.css';
import { darkThemeClass, themeVars } from '@/styles/theme.css';
import {
  bodyTypographyClass,
  headlineTypographyClass,
  lhVar,
  titleTypographyClass,
} from '@/styles/typography.css';
import {
  textFieldLabelBackgroundColorVar,
  textFieldLabelClass,
} from '../_/TextField/styles.css';

export const headerClass = style([
  darkThemeClass,
  {
    position: 'absolute',
    inset: 0,
    bottom: 'auto',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'center',
    gap: '10rem',
    padding: `1rem ${layoutPaddingInlineVar} 0`,
    color: themeVars.colors.onSurface,
  },
]);

export const headerSloganClass = style([
  bodyTypographyClass.lg,
  {
    vars: { [lhVar]: '1.25rem' },

    justifySelf: 'start',
    padding: '0.625rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: `rgba(${themeVars.colors.rgbValues.primary}, 0.24)`,
  },
]);

export const headerTitleClass = style({ justifySelf: 'center', fontSize: 0 });

export const headerContactInfoClass = style({
  justifySelf: 'end',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, max-content)',
  gap: '1rem',
});

const baseContactLinkClass = style({
  display: 'block',
  textAlign: 'end',
  color: 'inherit',
  cursor: 'pointer',
});

export const contactLinkClass = styleVariants({
  tel: [
    baseContactLinkClass,
    titleTypographyClass.lg,
    { textDecoration: 'none' },
  ],

  mail: [baseContactLinkClass, bodyTypographyClass.md],
});

const overlayOpeningKeyframes = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const overlayClosingKeyframes = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const headerDialogOverlayClass = style({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1,

  display: 'grid',
  placeItems: 'center',
  overflowY: 'auto',

  backgroundColor: `rgba(${themeVars.colors.rgbValues.scrim}, 0.32)`,

  selectors: {
    '&[data-state="open"]': {
      animation: `${overlayOpeningKeyframes} 200ms ease-in`,
    },

    '&[data-state="closed"]': {
      opacity: 0,
      animation: `${overlayClosingKeyframes} 200ms ease-in-out`,
    },
  },
});
export const headerDialogContentClass = style({
  display: 'grid',
  gap: '1.25rem',

  width: '100%',
  maxWidth: '35rem',
  padding: '1.25rem 1.5rem 1.5rem',

  borderRadius: '1.5rem',
  backgroundColor: themeVars.colors.surfaceContainerHigh,
});

export const headerDialogFormClass = style({ display: 'contents' });

globalStyle(`${headerDialogFormClass} ${textFieldLabelClass}`, {
  vars: {
    [textFieldLabelBackgroundColorVar]: themeVars.colors.surfaceContainerHigh,
  },
});

export const headerDialogErrorMessageClass = style([
  bodyTypographyClass.lg,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '-0.25rem 0',
    color: themeVars.colors.error,
  },
]);

globalStyle(`${headerDialogErrorMessageClass} > svg`, {
  marginRight: '0.375rem',
});

export const headerDialogTermsClass = style([
  bodyTypographyClass.sm,
  {
    marginTop: '-0.5rem',
    textAlign: 'center',
    color: themeVars.colors.onSurfaceVariant,
  },
]);

globalStyle(`${headerDialogTermsClass} > a`, { color: 'inherit' });

export const headerDialogDescriptionClass = style([
  bodyTypographyClass.lg,
  { marginTop: '-0.25rem', color: themeVars.colors.onSurfaceVariant },
]);

export const headerDialogCloseButtonClass = style({ justifySelf: 'end' });
