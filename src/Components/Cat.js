import React from 'react';
import axios from 'axios';

export default class Pet extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.addToFavorite = this.addToFavorite.bind(this);
    }


    addToFavorite(){
        const apikey = "d3b46a82-a072-4b3a-8871-cef4ba075e36";
        const options = {
            headers:{'x-api-key': apikey},
            // Content-Type: 'application/json'
        };
        
        axios.post(`https://api.thecatapi.com/v1/favourites`,{
            image_id:this.props.animal.id,
            sub_id:apikey,
        },
        options
        ).then((res)=>{
            
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        const {
            url,
        } = this.props.animal;

        return(
            <div className="text-center">
                <div style={{padding:"10px 15px 10px 15px"}}>
                    <img src={url} style={{width:300,height:300}} alt="cute cat" className="rounded-circle img-thumbnail"/>
                </div>                    
                <button className="btn btn-info" onClick={this.addToFavorite}>Add to Favourites</button>
            </div>
        )
    }

}