import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
//import './Product.css';

const Product = (props) => {
    console.log(props)
    return(
        <div>
            { props.product ? (
                <Card >
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={props.product.Poster}
                    title={props.product.Title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.product.Title}
                    </Typography>
                    <Typography component="p">
                        {props.product.Year}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href={props.product.imdbID} target="_blank">
                        Go To Course
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default Product;