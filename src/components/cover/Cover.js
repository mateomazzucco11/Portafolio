import React, { Component } from 'react'
import './Cover.css'
import coverVideo from '../../media/test3.mp4'

export class Cover extends Component {
    render() {
        return(
            <>
                <div className="container-video">
                    <video className="video" src={coverVideo} autoPlay loop muted/>
                </div>
            </>
        );
    }
}


export default Cover;
