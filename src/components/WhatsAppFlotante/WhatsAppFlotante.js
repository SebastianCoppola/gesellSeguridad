//Mui:
import { IconButton } from "@mui/material"
import { WhatsApp } from "@mui/icons-material"
//Utils:
import { colors } from "../../utils/const"
import { whatsApp } from "../../utils/utils"

const WhatsAppFlotante = () => {
    return (
        <IconButton onClick={()=>whatsApp()} sx={{
            background: colors.green,
            color: colors.white,
            width: '80px',
            height: '80px',
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            ':hover':{
                background: colors.green,
                boxShadow:`4px 4px 6px ${colors.greyClaro}`
            }
        }}>
            <WhatsApp sx={{fontSize: '50px'}}/>
        </IconButton>
    )
}

export default WhatsAppFlotante