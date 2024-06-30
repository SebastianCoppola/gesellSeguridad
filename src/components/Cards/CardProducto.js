import { useState } from "react"
//Mui:
import { Grid, Typography } from "@mui/material"
//Utils:
import { colors } from '../../utils/const'
//Components:
import CustomButon from "../CustomButton/CustomButton"
import ModalProducto from "../../pages/Home/ModalProducto"

const CardProducto = ({ data }) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            {/* CARD */}
            <Grid container sx={{
                background: colors.white,
                borderRadius:'25px',
                boxShadow:'1px 1px 7px grey',
                padding:'20px 25px',
                display:'flex',
                gap:'10px',
                flexDirection:'column',
                justifyContent:'space-between',
            }}>
                <Grid container gap={3}>
                    <Grid item xs={12} container justifyContent='center'>
                        <img src={data.img} alt='icon' style={{height:'140px'}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{fontSize: {xs:'13pt', md:'15pt'}, fontWeight: 700, textAlign:'center'}}>
                            {data.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container gap={1}>
                        {data.previewItems.map((it,index)=>(
                            <Grid item xs={12} key={index} sx={{display:'flex', gap:'10px'}}>
                                <Typography sx={{fontSize: {xs:'10pt', md:'10pt'}, fontWeight:700}}>
                                    •
                                </Typography>
                                <Typography sx={{fontSize: {xs:'10pt', md:'10pt'}}}>
                                    {it}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' sx={{padding:'30px 0 10px 0'}}>
                    <CustomButon
                        variant='contained' 
                        onClick={()=>setOpenModal(true)}
                        fontSize={{xs:'10pt', md:'13pt'}}
                        label={data.buttonLabel}
                    />
                </Grid>
            </Grid>

            {/* MODAL */}
            <ModalProducto
                open={openModal} 
                setOpen={setOpenModal} 
                data={data}
            />
        </>
    )
}

export default CardProducto