import { globalStyle, style } from '@vanilla-extract/css';

import { buttonStateLayerColorVar } from '@/components/buttons/styles.css';
import { darkThemeClass, themeVars } from '@/styles/theme.css';
import { bodyTypographyClass } from '@/styles/typography.css';

export const fifthSectionFormClass = style({
  display: 'grid',
  gap: '1.5rem',
  marginTop: '2rem',

  '@media': {
    '(min-width: 1024px)': { gridTemplateColumns: '2fr 1.25fr' },
  },
});

export const fifthSectionFormControlsClass = style({
  display: 'grid',
  gap: '1rem',

  '@media': {
    [themeVars.media.minWidth.sm]: { gridTemplateColumns: '1fr 1fr' },
  },
});

export const fifthSectionFormInputContainerClass = style({
  position: 'relative',
});

globalStyle(`${fifthSectionFormInputContainerClass} > p`, {
  vars: { [themeVars.lh]: '1.5rem' },

  position: 'absolute',
  top: '50%',
  right: '1rem',
  transform: 'translateY(-50%)',

  fontSize: '1rem',
  letterSpacing: '0.03125rem',
  userSelect: 'none',
});

export const fifthSectionResultsClass = style({
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
  justifyContent: 'space-between',
});

export const fifthSectionFormSubmitBtnClass = style([
  darkThemeClass,
  {
    width: '100%',

    ':disabled': {
      vars: { [buttonStateLayerColorVar]: 'transparent' },

      color: '#8e9695',
      backgroundColor: 'rgba(22, 29, 29, 0.12)',
    },

    selectors: {
      '&:disabled:hover': { cursor: 'default', boxShadow: 'none !important' },
    },
  },
]);

export const fifthSectionResultsWarningClass = style([
  bodyTypographyClass.sm,
  {
    marginTop: '0.25rem',
    padding: '0 1rem',

    textAlign: 'center',
    color: themeVars.colors.onSurfaceVariant,
  },
]);

globalStyle(`${fifthSectionResultsWarningClass} > button`, {
  display: 'inline',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'underline',
  backgroundColor: 'transparent',
});

// import { globalStyle, style } from '@vanilla-extract/css';

// import { buttonStateLayerColorVar } from '@/components/buttons/styles.css';
// import { darkThemeClass, themeVars } from '@/styles/theme.css';

// export const fifthSectionFormClass = style({
//   display: 'grid',
//   gridTemplateColumns: '1.5fr 1fr',
//   gap: '1rem',

//   marginTop: '2rem',
// });

// globalStyle(`${fifthSectionFormClass} fieldset`, {
//   display: 'grid',
//   gridTemplateColumns: '1fr max-content 1fr',
//   alignItems: 'center',
//   gap: '0.75rem',

//   border: 'none',
// });

// export const fifthSectionFormRestInputsClass = style({
//   display: 'grid',
//   gridTemplateColumns: '1fr 1fr',
//   gap: '1rem',

//   marginTop: '1.25rem',
// });

// export const fifthSectionFormResultClass = style({
//   padding: '1rem',

//   borderRadius: '0.75rem',
//   border: `1px solid ${themeVars.colors.outline}`,
// });

// export const fifthSectionFormInputContainerClass = style({
//   position: 'relative',
// });

// globalStyle(`${fifthSectionFormInputContainerClass} > p`, {
//   vars: { [themeVars.lh]: '1.5rem' },

//   position: 'absolute',
//   top: '50%',
//   right: '1rem',
//   transform: 'translateY(-50%)',

//   fontSize: '1rem',
//   letterSpacing: '0.03125rem',
//   userSelect: 'none',
// });
