import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeOut } from 'react-animations';

const FadeOut = styled.div`animation: 3s ${keyframes `${fadeOut}`} infinite`;
export default class ReactAnimations extends Component{
    render(){
        return(
            <FadeOut>
                {this.props.children}
            </FadeOut>
        )
    }
}
