import { extendTheme } from '@chakra-ui/react';

export const themes = extendTheme({
  styles: {
    global: () => ({
      body: {
        color: '#F3EFE0',
        bg: '#222222',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    }),
  },
  colors: {
    beige: '#F3EFE0',
    grey: '#434242',
    black: '#222222',
    teal: '#22A39F',
  },
});
