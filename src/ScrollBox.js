import React, { Component } from 'react';

class ScrollBox extends Component {
    render() {
        const style ={};

        return (
            <div ref={(ref)=>{this.box=ref}}>
                <div/>
                
            </div>
        );
    }
}

export default ScrollBox;