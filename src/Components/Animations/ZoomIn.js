import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const ZoomIn = styled.div`animation: 3s ${keyframes `${zoomIn}`} 1`;
export default class ReactAnimations extends Component{
    render(){
        return(
            <ZoomIn>
                {this.props.children}
            </ZoomIn>
        )
    }
}
