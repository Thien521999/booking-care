import { createTheme } from '@mui/material/styles';

export let theme = createTheme({
  typography: {
    fontFamily: `'AvantGarde Md BT', sans-serif`,
  },
  palette: {
    primary: {
      main: '#6C6C6C',
    },
    secondary: {
      main: '#00A3E0',
    },
    error: {
      main: '#EB342E',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '580px',
          '@media (min-width: 600px)': {
            maxWidth: '580px',
          },
        },
        maxWidthMd: {
          maxWidth: '1180px',
          '@media (min-width: 900px)': {
            maxWidth: '1180px',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          // height: '44px',
          fontSize: '18px',
          lineHeight: '21px',
          color: '#000000',
          background: '#fff',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #C4C4C4',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#C4C4C4',
          },
          input: {
            '&::placeholder': {
              color: '#6C6C6C',
            },
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: '0 !important',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          marginLeft: '0',
          padding: '0 10px 0 0',
          // background: '#fff !important',
          color: '#6C6C6C !important',
          '&.Mui-checked': {
            color: '#EB342E !important',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#000000',
          fontSize: '18px',
          lineHeight: '21px',
          fontWeight: '400',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '2px !important',
          marginRight: '0px !important',
          marginLeft: '0px !important',
          color: '#EB342E',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '14px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          // display: 'flex',
          // alignItems: 'center',
          fontSize: '16px',
          lineHeight: '20px',
          color: '#000000',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '19px',
          fontSize: '18px',
          lineHeight: '21px',
          color: '#000000',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          minWidth: '1600',
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#c7e8f6 !important',
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          color: 'transparent !important',
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingBottom: '0px',
          '&.MuiMenu-list': {
            paddingTop: '0',
            maxWidth: '600px !important',
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          marginBottom: '8px',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: '#00000033',
        },
      },
    },
  },
});
