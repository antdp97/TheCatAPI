
import React from 'react';
import axios from 'axios';
import Cat from './Cat';
import BreedInfo from './BreedInfo';

export default class PetList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pet: null,
            breedOption: "None",
            breeds: null,
            breed_name: [],
            breed_query: null,
            breedDescription: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.findCatByBreed = this.findCatByBreed.bind(this);
        this.getBreedDescription = this.getBreedDescription.bind(this);
        this.getBreedArray = this.getBreedArray.bind(this);
    }

    componentDidMount(){
        axios.get(`https://api.thecatapi.com/v1/breeds`).then((res)=>{
            this.setState({
                breeds : res.data
            });
            this.getBreedArray();
        });
        
    };

    getBreedArray(){
        let breed_name_array = [];
        this.state.breeds.forEach((breed_info,index)=>{                    
            breed_name_array.push(breed_info.name.split(' ').join('_'));
        });        
        this.setState({
            breed_name: breed_name_array
        })
    }

    handleChange = (event) =>{
        //Using target title as a index of breed_name
        const selectedIndex = event.target.options.selectedIndex;

        this.setState({
            breedOption: event.target.value,
            breed_query: event.target.options[selectedIndex].getAttribute('data-key')
        },()=>{
            this.getBreedDescription();
            this.findCatByBreed();
        });
        
        
    }

    getBreedDescription(){
        const url = `https://api.thecatapi.com/v1/breeds/search?q=`;
        const { 
            breed_query,
            breed_name
        } = this.state;
        axios.get(url+ breed_name[breed_query]).then((res)=>{
            console.log(res);
            this.setState({
                breedDescription: res.data[0],
            })
        })
        console.log(this.state.breedDescription);
    }

    findCatByBreed(){
        const options={
            headers: {'x-api-key':"d3b46a82-a072-4b3a-8871-cef4ba075e36"}
        }
        const { breedOption } = this.state;
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=3&breeds=${breedOption}`,options).then((res)=>{
            this.setState({
                pet: res.data,
            })
        })
    }

    render(){
        const { 
            pet,
            breeds,
            breedDescription
        } = this.state;
        // const backgroundURL = `https://image.freepik.com/free-vector/vector-background-paper-note-cute-cat_45130-344.jpg`;
        //{/* backgroundImage:`url(${backgroundURL})` */}
        return (
            <div className="container align-items-center" 
            style={{
                
                }}
            >
                <h1>Let's investigate more about each breed of our cats</h1>
                <div>
                    {/* Selection of Breed Type */}
                    <label htmlFor="breed-select">Enter the Breed type:
                        <select onChange={this.handleChange} value={this.state.breedOption} className="form-control" id="breed-select">
                            <option value="None" disabled>None</option>
                            {
                                breeds !== null ?
                                breeds.map((breed_data,index)=>{
                                    return(
                                        <option key={index} data-key={index} value={breed_data.id}>{breed_data.name}</option>
                                    )
                                }):
                                null
                            }
                        </select>
                    </label>
                </div>
                {/* Selection of Image Type */}
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}} id="flex-container" className="text-center">
                {
                    pet !== null ?
                    pet.map((animal ,index)=>{
                        return (
                                <Cat animal={animal} key={index}/>
                        )
                    })
                    : <p>No Kitty Here</p>
                }
                </div>

                <hr />

                {
                    breedDescription !== null ?
                    <BreedInfo {...breedDescription}/>: null
                }
            </div>

        )
    }
}
// description={breedDescription.description} name={breedDescription.name} character={breedDescription.temperament}