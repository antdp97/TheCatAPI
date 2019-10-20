import React from 'react';
import axios from 'axios';
import Cat from './Cat';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pet: null,
            breedOption: "None",
            breeds: null,
            imageType : "None",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleImgType = this.handleImgType.bind(this);
        this.findCatByFilter = this.findCatByFilter.bind(this);
    }

    componentDidMount(){
        const url = `https://api.thecatapi.com/v1/breeds`;
        axios.get(url).then((res)=>{
            this.setState({
                breeds : res.data
            });
        });
        this.findCatByFilter();
    };

    UNSAFE_componentWillUpdate(){
        // this.findCatByFilter();
    }

    handleChange = (event) =>{

        this.setState({
            breedOption: event.target.value,
        },()=>{
            this.findCatByFilter();
        });        
    }

    handleImgType = (event) =>{
        this.setState({
            imageType:event.target.value,
        },()=>{
            this.findCatByFilter();
        });
    }


    getCatData(){
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=6&order=Desc`).then((res)=>{
            this.setState({
                pet: res.data,
            });
        })
    };

    findCatByFilter(){
        const {
            imageType,
            breedOption,
        } = this.state;

        let params = "";
        if(imageType === "None"){
            params = "png,jpg,gif";
        } else if(imageType === "static"){
            params = "png,jpg";
        } else {
            params = "gif";
        };
        const options={
            headers: {'x-api-key':"d3b46a82-a072-4b3a-8871-cef4ba075e36"}
        }
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=6&mime_types=${params}&breeds=${breedOption}`,options).then((res)=>{
            this.setState({
                pet: res.data,
            })
        
        })
    }

    // 
    render(){
        const { 
            pet,
            breeds,
        } = this.state;
        return (
            <div className="container align-items-center">
                <h1>Let's get some Cat images</h1>
                <div>
                    {/* Selection of Breed Type */}
                    <label htmlFor="breed-select">Choose the Breed type:
                        <select onChange={this.handleChange} value={this.state.breedOption} className="form-control" id="breed-select">
                            <option value="None">None</option>
                            {
                                breeds !== null ?
                                breeds.map((breed_data,index)=>{
                                    return(
                                        <option key={index} value={breed_data.id}>{breed_data.name}</option>
                                    )
                                }):
                                null
                            }
                        </select>
                    </label>
                </div>
                {/* Selection of Image Type */}
                <div>
                    <label htmlFor="img-type">Image Type:
                        <select onChange={this.handleImgType} value={this.state.imgType} className="form-control" id="img-type">
                            <option value="None">None</option>
                            <option value="static">Static</option>
                            <option value="animated">Animated</option>                            
                        </select>
                    </label>                            
                </div>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}} id="flex-container">
                {
                    pet !== null ?
                    pet.map((animal ,index)=>{
                        return(
                            <Cat animal={animal} key={index}/>
                        )
                    })
                    : <p>No Kitty Here</p>
                }
                </div>
            </div>
        )
    }
}