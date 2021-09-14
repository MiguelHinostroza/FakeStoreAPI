import React, {FunctionComponent, useEffect, useState} from 'react';
import {makeStyles, Paper} from "@material-ui/core";
import {useHistory, useParams} from "react-router-dom";
import FakeStoreHttp from "../http/FakeStore.http";

import ProductDetails from "../components/ProductDetails";


interface OwnProps {}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '50vh',
        //backgroundColor: theme.palette.primary.main,
        color: "black",
    },
}))

const ProductPage: FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    const params: any = useParams(); // React Router Dom
    const history = useHistory(); // React Router Dom

    const fakeStoreHttp = FakeStoreHttp.getInstance();

    const [product, setProduct] = useState({});

    const handleProduct = async () => {
        if(!params.id) {
            history.push('/');
        }
        const productWanted = await fakeStoreHttp.getProductById(params.id);
        setProduct(productWanted);
    }

    useEffect(() => {
        handleProduct()
    }, [])

    console.log(product);

  return (
        <Paper className={classes.root}>
            <ProductDetails product={product}/>
        </Paper>
  );
};

export default ProductPage;
