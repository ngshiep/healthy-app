import { createTheme } from '@mui/material'
const primaryColor = '#FF963C'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryColor
    }
  },
  typography: {
    fontFamily: ['Noto Sans JP', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontSize: 14
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { padding: '4.75px 16px', textTransform: 'none', fontSize: '14px', cursor: 'pointer' }
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: 'white'
          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: primaryColor
          }
        },
        {
          props: { variant: 'text' },
          style: {
            color: primaryColor
          }
        }
      ]
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: { padding: '16px 16px', textTransform: 'none', fontSize: '14px' },
        input: {
          fontSize: '14px',
          height: '28px !important',
          padding: '0 !important'
        },
        inputRoot: {
          padding: '4px 12px'
        },
        listbox: {
          fontSize: '14px'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: { textTransform: 'none', fontSize: '14px' },
        input: {
          padding: '4px 12px!important',
          lineHeight: '28px',
          fontSize: '14px',
          height: '28px'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px'
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '0 8px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '14px'
        }
      }
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          height: '20px'
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: '0 8px'
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          height: '28px',
          width: '80%',
          borderRadius: '20px',
          marginBottom: '15px',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%) translateX(-6px)'
        }
      },
      variants: [
        {
          props: { size: 'small' },
          style: {
            width: '50px',

            '& .MuiSwitch-track': {
              height: '22px',
              transform: 'translateY(-50%) translateX(-6px)'
            }
          }
        }
      ]
    }
  }
})
