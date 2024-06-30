import { createTheme } from '@mui/material/styles'
import { colors } from './const'

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, Arial, sans-serif',
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.orange, 
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.orange,
                    },
                },
                input: {
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    fontSize: '10pt',      
                },
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: `1px solid ${colors.orange}`,
                    },
                      '&.Mui-focused:after': {
                        borderBottomColor: colors.orange,
                    },
                      '&:after': {
                        transition: 'none',
                    },
                },
                input: {
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    fontSize: '10pt',      
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    fontSize: '10pt',      
                    '&.Mui-focused': { color: colors.orange },
                },
            },
        }
    }
})

export default theme