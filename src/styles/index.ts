import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',
      
      emerald700: '#047857',
      emerald500: '#10b981',
      emerald100: '#d1fae5',

      red700: '#b91c1c',
      red500: '#ef4444',
      red100: '#f87171',
      
      purple700: '##7e22ce',
      purple500: '##a855f7',
      purple100: '#f3e8ff',

      black: '#000',
      golden: '#d3af37',
    },
    fontSizes:{
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  }
})