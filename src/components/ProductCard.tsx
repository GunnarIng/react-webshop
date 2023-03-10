import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Product } from '../../data'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Link to='./product-description'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component='img' height='140' image={product.image} alt={product.title} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {product.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {product.description}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              $ {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
