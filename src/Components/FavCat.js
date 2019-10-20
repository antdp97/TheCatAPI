import React from 'react';
import axios from 'axios';

export default class FavCat extends React.Component{
    constructor(props){
        super(props);
        this.removeFromFavorite = this.removeFromFavorite.bind(this);
    }

    removeFromFavorite(){
        const apikey = "d3b46a82-a072-4b3a-8871-cef4ba075e36";
        const url = "https://api.thecatapi.com/v1/favourites/";
        const options = {
            headers:{'x-api-key': apikey},
            // Content-Type: 'application/json'
        };
        axios.delete(url + this.props.animal.id,
        options
        ).then((res)=>{
            console.log(res);
            alert("Removed");
            this.props.onRefresh();
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        const {
            url,
        } = this.props.animal.image;
        return(
            <div>
                <div style={{padding:"10px 15px 10px 15px"}}>
                    <img src={url} style={{width:300,height:300}} alt="cute cat" className="rounded-circle img-thumbnail"/>
                </div>                    
                <button className="btn btn-info" onClick={this.removeFromFavorite}>Remove from Favourites</button>
            </div>
        )
    }

}