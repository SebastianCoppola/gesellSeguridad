//MUI:
import { Dialog, Divider, Grid, IconButton, Typography } from "@mui/material"
import { Close } from "@mui/icons-material"
//Components:
import CustomButon from "../../components/CustomButton/CustomButton"

const ModalProducto = ({ open, setOpen, data }) => {

    return (
        <Dialog onClose={()=>setOpen(false)} open={open}>
            <Grid container gap={2} sx={{padding:{xs:'20px 25px', md:'15px 20px'}, borderRadius:'25px'}}>
                <Grid item xs={12} container flexWrap='nowrap' justifyContent='space-between' alignItems='center'>
                    <Typography sx={{fontSize:'16pt', fontWeight:700}}>
                        {data.title}
                    </Typography>
                    <IconButton onClick={()=>setOpen(false)}>
                        <Close/>
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                {data.allItems.map((it, index)=> (
                    <Grid key={index} item xs={12} container gap={1}>
                        <Grid item xs={12}>
                            <Typography sx={{fontSize:'11pt', fontWeight:700}}>
                                {it.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} container>
                            {it.items.map((ut, index)=>(
                                <Grid key={index} item xs={12} sx={{display:'flex', gap:'10px'}}>
                                    <Typography sx={{fontSize: {xs:'10pt', md:'10pt'}, fontWeight:700}}>
                                        •
                                    </Typography>
                                    <Typography sx={{fontSize: {xs:'10pt', md:'10pt'}}}>
                                        {ut}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))}
                <Grid item xs={12} container justifyContent='center' sx={{padding:'17px 0 10px 0'}}>
                    <CustomButon
                        variant='contained' 
                        onClick={()=>{}}
                        fontSize={{xs:'10pt', md:'13pt'}}
                        label={"MÁS INFORMACIÓN"}
                    />
                </Grid>
            </Grid>
        </Dialog>
    )
}     

export default ModalProducto