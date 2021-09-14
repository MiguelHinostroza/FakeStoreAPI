import React, {ChangeEvent, FunctionComponent, useEffect, useState} from 'react';
import {Product} from "../models/Products";
import FakeStoreHttp from "../http/FakeStore.http";
import {Grid, makeStyles} from "@material-ui/core";
import ProductItem from "../components/ProductItem";

interface OwnProps {}

const useStyles = makeStyles(theme => ({
    text: {
        textAlign: 'center'
    }
}))

type Props = OwnProps;

const HomePage: FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    const [products, setProducts] = useState<any[]>([]);


    const fakeStoreHttp = FakeStoreHttp.getInstance();

    const handleProduct = async () => {
        const product = await fakeStoreHttp.getProducts();
        setProducts(product)
    }

    //console.log(products)


    useEffect(() => {
        handleProduct();
    }, []);
    //console.log(products, 'productos a ver que trae');


  return (
      <><h1 className={classes.text}>Listado de Producto</h1><Grid container>
          {products && products.map((product) => (
              <Grid item xs={12} sm={6} md={6} lg={6}>
                  <ProductItem  product={product} key={product.id}/>
              </Grid>
          ))}
      </Grid></>

  );
};

export default HomePage;
