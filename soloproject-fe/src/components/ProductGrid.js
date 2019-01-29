import React, {Component} from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Product from '../components/Product'
//import './ProductGrid.css';

class ProductGrid extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            searchString: ''
        }
        this.getProducts = this.getProducts.bind(this);
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    }
   
    
    // this wan listens to keyboard inputs and searches dynamically
    onSearchInputChange(event){
        console.log(event.target.value);
        this.setState({searchString: event.target.value});
        this.getProducts();
    }
    
    // When enter is pressed its searched again.
    _handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.setState({searchString: event.target.value});
            this.getProducts();
        }
    }
        
    //axios call to get stuff from DB/Java/API
    getProducts = (event) => {
        axios({
            method: 'get',
            url: 'http://www.omdbapi.com/?s=' + this.state.searchString + '&apikey=ab8b9a5a',
            responseType: 'json'
        }).then(response => {
            this.setState({products: response.data.Search});
            console.log(response.data.Search);
        }).catch((error) => {
            console.log("Error occurred while fetching Entries")
            console.error(error);
        })
    }
    
    render() {
        return ( 
            <div id = "hanji" >
                <TextField style = {{padding: 24}} 
                    id = "searchInput" 
                    placeholder = "Search for Food" 
                    margin = "normal"
                    value = {this.state.searchString}
                    onChange = {this.onSearchInputChange}
                    onKeyPress= {this._handleKeyPress}
                />
                {/* the products wont be rendered if none are there */}
                {this.state.products ? (
                    <div>
                        <Grid container spacing = {24} 
                            style = {{padding: 24}}> 
                            {this.state.products.map(currentProduct => ( 
                                <Grid item xs = {12} sm = {6} lg = {4} xl = {3} >
                                    <Product product = {currentProduct} /> 
                                </Grid>
                            ))
                            } 
                        </Grid>
                    </div>
                ): "No Food Found"}
            </div>
        )
    }
}
export default ProductGrid;
