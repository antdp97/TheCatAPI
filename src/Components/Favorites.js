import React from 'react';
import axios from 'axios';
import FavCat from './FavCat';

export default class Favorites extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pet: null,
        };

        this.getFav = this.getFav.bind(this);
    }

    componentDidMount(){
        this.getFav();
    };

    UNSAFE_componentWillUpdate(){
        // this.findCatByFilter();
    }

    getFav(){
        const url = "https://api.thecatapi.com/v1/favourites?sub_id="
        const apikey = "d3b46a82-a072-4b3a-8871-cef4ba075e36";
        const options = {
            headers:{'x-api-key': apikey},
        };
        axios.get(url+apikey+"&limit=5",options)
        .then((res)=>{
            this.setState({
                pet: res.data,
                isFavMode: true
            })
        
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
    render(){
        const { pet } = this.state;
        return(
            <div className="container">
                <h1>This is Your favorites Cat images collection</h1>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}} id="favorite-container">
                {   pet !== null ?
                    pet.map((animal ,index)=>{
                        return <FavCat animal={animal} key={index} onRefresh={this.getFav}/>
                })  : <div>Loading...</div>
                }
                </div>
            </div>
        )
    }
}