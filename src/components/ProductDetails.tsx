import React, {FunctionComponent} from 'react';
import {Rating} from "@material-ui/lab";
import {Button, Grid, makeStyles, TextField, Typography} from "@material-ui/core";

//import {Product} from "../models/Products";

interface OwnProps {
    product: any
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
    subContainerInfo: {
        width: '100%'
    },
    imgPoster: {
        minHeight: '50vh',
        objectFit: 'cover',
        padding: "10px",
    },
    containerImg: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        alignContent: 'center',
        minHeight: '30vh',
        objectFit: 'cover',
        padding: theme.spacing(3)
    },
    containerInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        padding: theme.spacing(3)
    },
    contenedor: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    input: {

        padding: "10px"

    },
    btn: {
        backgroundColor: "#000",
        color: "#fff",
    }
}))

const ProductDetails: FunctionComponent<Props> = ({product}) => {
    const classes = useStyles();
    return (
        <><h2>Detalle del producto</h2><Grid container>
            <Grid item xs={12} md={5} lg={6} className={classes.containerImg}>
                <img className={classes.imgPoster} src={product.image} alt=""/>
            </Grid>

            <Grid item xs={12} md={7} lg={6} className={classes.containerInfo}>
                <div className={classes.subContainerInfo}>
                    {/* <div>{product.title}</div>*/}
                    <Typography variant="h2">{product.title} </Typography>
                    <Typography align="justify" variant="h4">Rating: {product?.rating?.rate}  </Typography>
                    <Rating name="read-only" max={10 / 2} value={parseInt(product?.rating?.rate as string) / 2}
                            readOnly/>
                    <Typography variant="h6">Price: $ {product.price} </Typography>
                    <Typography variant="h6">Description: {product.description} </Typography>

                    <TextField id="outlined-basic" label="" variant="outlined"/>

                    <Button variant="contained" color="inherit">
                        Agregar al carrito
                    </Button>
                </div>
            </Grid>

        </Grid></>
    )
        ;
};

export default ProductDetails;
