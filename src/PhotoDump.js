import React from 'react'
import styled from "styled-components";
import photos from "./photos.png";

const TitleBox = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.25em;
margin: 0.5em;
margin-bottom: 1.5em;
width: 7em;
background: #E8C2CA;
color: #735D78;
font-size: 0.75em;
font-family: 'Lato', sans-serif;
font-weight: bold;
border: 1.75px solid #E8C2CA;
`;

export default function PhotoDump() {
    return (
        <div>
            <div>
                <TitleBox>Photo Dump!</TitleBox>
            </div>
                <div className="photos">
                    <img src={photos} width="80%" height="80%" class="padding"/>
                </div>
        </div>
    )
}
