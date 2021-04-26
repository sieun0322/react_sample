import React, { Component } from 'react';

class EventPractice extends Component {
    render() {
        return (
            <div>
               <input
               type="text"
               name="message"
               placeholder="입력하세요"
               onChange={
                   (e)=>{
                       console.log(e);
                   }
                }
                /> 
            </div>
        );
    }
}

export default EventPractice;