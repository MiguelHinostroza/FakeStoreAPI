import React, { FunctionComponent } from 'react';
import {Product} from "../models/Products";
import {Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

interface OwnProps {
  product: Product
}

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 400,
    },
    cardCon: {
        height: 150,
    },
    itemC: {
        display: "block",
        alignSelf: "auto",
        alignItems: "center",
    },
     text: {
        textAlign: 'center'
    }
}))

type Props = OwnProps;

const ProductItem: FunctionComponent<Props> = ({product}) => {
   const classes = useStyles();
   const history = useHistory();
  const handleClick = () => {
    history.push(`/products/${product.id}`);
  }

  return (
      <Box p={1} mt={3}>
        <Card className={classes.itemC} onClick={handleClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    //height="400"
                    width="auto"
                    image={product.image}
                    title="Contemplative Reptile"
                />
                  <CardContent className={classes.cardCon}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.title}
                        </Typography>
                        <Typography className={classes.text} variant="body1" color="textPrimary" component="p">
                            ${product.price}
                        </Typography>
                    </CardContent>
            </CardActionArea>
        </Card>
      </Box>
  );
};

export default ProductItem;
