import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import CheckoutCard from '../components/CheckoutCard'
import CheckoutCardSubheaders from '../components/CheckoutCardSubheaders'
import CheckoutTotalPrice from '../components/CheckoutTotalPrice'

function Checkout() {
  const isMediumScreen = useMediaQuery('(min-width:900px)')
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
        <Typography variant='h3'>Cart</Typography>
        <Button variant='contained' sx={{ fontWeight: '800', color: 'common.black' }}>
          Checkout <KeyboardDoubleArrowDownIcon />
        </Button>
      </Box>

      {isMediumScreen && <CheckoutCardSubheaders />}

      <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
        <CheckoutCard />
        <CheckoutCard />
      </Stack>

      <CheckoutTotalPrice />
    </Container>
  )
}

export default Checkout