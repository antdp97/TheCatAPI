import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const BounceIn = styled.div`animation: 3s ${keyframes `${bounceIn}`} 1`;
export default class ReactAnimations extends Component{
    render(){
        return(
            <BounceIn>
                {this.props.children}
            </BounceIn>
        )
    }
}
