import React, { Component } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import GridItem from '../components/GridItem'

class ProductGrid extends Component {
    
    state = {
        products: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getProducts()
    }
//'https://jsonplaceholder.typicode.com/todos/1'
    
    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getProducts()
    }
    
     getProducts = () => {
         axios({
            method: 'get',
            url: 'http://www.omdbapi.com/?apikey=ab8b9a5a&s=' + this.state.searchString + '',
            responseType: 'json'
        }).then(response => {
            this.setState({ products: response.data.Search});
            console.log(response.data);
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }
    render() {
        return (
            <div id="hanji">
                { this.state.foods ? (
                    <div>
          
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Food"   
                            margin="normal"
                            value={this.state.searchString}
                            onChange={this.onSearchInputChange}/>
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.products.map(currentProduct=> (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <GridItem product={currentProduct} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No Products found" }
            </div>
        )
    }
}
export default ProductGrid;