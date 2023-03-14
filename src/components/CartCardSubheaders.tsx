import { Typography } from '@mui/material'
import { Box } from '@mui/system'

function CartCardSubheaders() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant='h3' color='secondary.dark' sx={{ fontSize: '1.4rem' }}>
        Product
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography variant='h3' color='secondary.dark' sx={{ mr: 20, fontSize: '1.4rem' }}>
          Quantity
        </Typography>
        <Typography variant='h3' color='secondary.dark' sx={{ fontSize: '1.4rem' }}>
          Delete
        </Typography>
      </Box>
    </Box>
  )
}

export default CartCardSubheaders
