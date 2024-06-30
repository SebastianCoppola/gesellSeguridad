import { Construction } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import { colors } from "../../utils/const"

const Tips = () => {

    return (
        <Grid container justifyContent='center' alignItems='center' gap={1} sx={{width:'100%', height: '500px'}}>
            <Construction fontSize='large' sx={{color: colors.grey}}/>
            <Typography>
                Página en Construcción
            </Typography>
        </Grid>
    )
}

export default Tips