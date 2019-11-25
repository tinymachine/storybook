import { transparentize } from 'polished';
import { CSSObject, Theme } from '@storybook/theming';

export const headerCommon = ({ theme }: { theme: Theme }): CSSObject => ({
  margin: '20px 0 8px',
  padding: 0,
  cursor: 'text',
  position: 'relative',
  color: theme.color.defaultText,
  '&:first-of-type': {
    marginTop: 0,
    paddingTop: 0,
  },
  '&:hover a.anchor': {
    textDecoration: 'none',
  },
  '& tt, & code': {
    fontSize: 'inherit',
  },
});

export const codeCommon = ({ theme }: { theme: Theme }): CSSObject => ({
  lineHeight: 1,
  margin: '0 2px',
  padding: '0 5px',
  whiteSpace: 'nowrap',

  borderRadius: '3px',
  fontSize: theme.typography.size.s2 - 1,

  // color: theme.base === 'dark' && theme.color.darkest,

  border:
    theme.base === 'light'
      ? `1px solid ${theme.color.mediumlight}`
      : `1px solid ${theme.color.darker}`,
  color:
    theme.base === 'light'
      ? transparentize(0.1, theme.color.defaultText)
      : transparentize(0.3, theme.color.defaultText),
  backgroundColor: theme.base === 'light' ? theme.color.lighter : theme.color.border,
});

export const withReset = ({ theme }: { theme: Theme }): CSSObject => ({
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s3,
  margin: 0,

  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  WebkitOverflowScrolling: 'touch',
});

export const withMargin: CSSObject = {
  margin: '16px 0',
};
