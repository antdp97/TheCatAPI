import React from 'react';
import axios from 'axios';
import ZoomIn from './Animations/ZoomIn';
export default class FavCat extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isDeleted:false
        }
        this.removeFromFavorite = this.removeFromFavorite.bind(this);
    }

    // componentWillUpdate(){
    //     if(this.state.)
    // }

    removeFromFavorite(){
        const apikey = "d3b46a82-a072-4b3a-8871-cef4ba075e36";
        const url = "https://api.thecatapi.com/v1/favourites/";
        const options = {
            headers:{'x-api-key': apikey},
        };
        axios.delete(url + this.props.animal.id,
        options
        ).catch((err)=>{
            console.log(err);
        });
        this.setState({
            isDeleted:true
        });
    }

    render(){
        const {
            url,
        } = this.props.animal.image;
        return(
            <div className="text-center" style={{paddingBottom:30}}>
                {  
                    this.state.isDeleted === false ?
                    <div>
                        <ZoomIn>
                            <div style={{padding:"10px 15px 10px 15px"}}>
                                <img src={url} style={{width:200,height:200}} alt="cute cat" className="rounded-circle img-thumbnail"/>
                            </div>         
                        </ZoomIn>                    
                        <button className="btn btn-info" onClick={this.removeFromFavorite}>Remove from Favourites</button>
                    </div>
                    : 
                    <div>
                        <ZoomIn>
                                <div style={{padding:"10px 15px 10px 15px"}}>
                                    <img src={url} style={{width:200,height:200}} alt="cute cat" className="rounded-circle img-thumbnail"/>
                                </div>         
                        </ZoomIn>                    
                        <button className="btn btn-info" disabled>Removed</button>
                    </div>
                }
            </div>
        )
    }

}