//Mui:
import { Button } from "@mui/material"
//Utils:
import { colors, buttonVariant } from "../../utils/const"


const CustomButon = (props) => {
    
    const { label, fontSize, onClick, variant, style, blackContrast } = props
    
    const getButtonStyle = () => {
        switch(variant){
            case buttonVariant.contained:
                return {
                    borderRadius: '7px', 
                    border: `2px solid ${colors.orange}` , 
                    background: colors.orange,
                    fontSize: {xs: fontSize?.xs ?? fontSize, md: fontSize?.md ?? fontSize}, 
                    fontWeight: 700, 
                    color: colors.white, 
                    padding: '5px 18px',
                    ':hover':{
                        background: colors.orange,
                        boxShadow: blackContrast ? `1px 1px 5px ${colors.grey}` : `4px 4px 6px ${colors.greyClaro}`
                    }
                }
            case buttonVariant.outlined:
                return {
                    borderRadius: '7px', 
                    border: `2px solid ${colors.orange}` , 
                    background: colors.transparent,
                    fontSize: {xs: fontSize?.xs ?? fontSize, md: fontSize?.md ?? fontSize}, 
                    fontWeight: 700, 
                    color: colors.orange, 
                    padding: '5px 18px',
                    ':hover':{
                        background: colors.transparent,
                        boxShadow: blackContrast ? `1px 1px 5px ${colors.grey}` : `4px 4px 6px ${colors.greyClaro}`
                    }
                }
            default:
                return {}
        }
    }

    return (
        <Button 
            onClick={onClick} 
            sx={{ ...getButtonStyle(), ...(style ?? {})}}
        >
            { label }
        </Button>
    )
}

export default CustomButon