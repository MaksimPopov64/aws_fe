import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Product } from 'models/Product';
import { formatAsPrice } from 'utils/utils';
import AddProductToCart from 'components/AddProductToCart/AddProductToCart';
import axios from 'axios';
import API_PATHS from 'constants/apiPaths';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

type IProps = {
 id: any;
 index: any;
}

export const ProductLayout:React.FC<IProps> = ({id}: any, {index}: any) => {
  const classes = useStyles();
  const [product, setProducts] = useState<Product>(
    {id: '',
    title: '',
    description: '',
    price: 0});

    console.log(index, id);
  

  useEffect(() => {
    axios.get(`${API_PATHS.product}${id}`).then((res) => setProducts(res.data.item));
  }, []);

  return (   
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={`https://source.unsplash.com/random?sig=${index}`} title='Image title' />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.title}
          </Typography>
          <Typography>{formatAsPrice(product.price)}</Typography>
        </CardContent>
        <CardActions>
          <AddProductToCart product={product} />
        </CardActions>
      </Card>   
  );
}
