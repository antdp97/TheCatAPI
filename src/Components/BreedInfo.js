import React from 'react';

export default class BreedInfo extends React.Component{
    
    render(){
        const {
            temperament,
            name,
            description,
            life_span,
            weight,
            origin,
            wikipedia_url,
        } = this.props;
        return( 
            <div>
                <h2 className="text-center">{name}</h2>
                <blockquote className="blockquote text-left">
                    <p className="mb-0">{description}</p>
                    <footer className="blockquote-footer">{temperament}</footer>
                </blockquote>
                <hr />
                <p>Origin: {origin}</p>
                <p>Life Span: {life_span}</p>
                <p>Weight:{weight.imperial}</p>
                <p>Read more about <a href={wikipedia_url}>{name}</a> on Wikipedia</p>
            </div>
        )
    }
}