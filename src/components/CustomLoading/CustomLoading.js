//Mui:
import { CircularProgress, Backdrop } from '@mui/material'

const CustomLoading = ({ loading }) => {
    return (
        <Backdrop open={loading} sx={{zIndex: 1300, color:'#ffff'}}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default CustomLoading