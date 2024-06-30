//Mui:
import { IconButton, Snackbar } from "@mui/material"
import { WhatsApp } from "@mui/icons-material"
//Utils:
import { colors } from "../../utils/const"
import { whatsApp } from "../../utils/utils"

const WhatsAppFlotante = () => {
    return (
        <Snackbar open={true} anchorOrigin={{vertical:'bottom', horizontal:'right'}} sx={{margin:'0 40px 40px 0'}}>
            <IconButton onClick={()=>whatsApp()} sx={{
                background: colors.green,
                color: colors.white,
                width: '60px',
                height: '60px',
                ':hover':{
                    background: colors.green,
                    boxShadow:`4px 4px 6px ${colors.greyClaro}`
                }
            }}>
                <WhatsApp fontSize='large'/>
            </IconButton>
        </Snackbar>
    )
}

export default WhatsAppFlotante