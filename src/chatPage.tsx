import React from "react";
import './App.css';
//import { Webcam_Video } from "./webrtc";
import { Webcam_Video } from "./webrtc.tsx";


export function Private_message(){
    return(
        <>
        <Webcam_Video />
        </>
    )
}

export function test(){
    return(
        <>
        <h1>testing</h1>
        </>
    );
}



export default test;