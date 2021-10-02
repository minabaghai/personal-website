import React from 'react'
import styled from "styled-components";


const TitleBox = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.25em;
margin: 1em;
width: 6em;
background: #E8C2CA;
color: #735D78;
font-size: 0.75em;
font-family: 'Lato', sans-serif;
font-weight: bold;
border: 1.75px solid #E8C2CA;
`;

const AboutWrapper = styled.section`
padding: 1em;
margin: 0.5em 5em;
background: #D1B3C4;
border: 0.75em solid #B392AC;
`;

const Divider = styled.section`
  padding: 0.01em;
  margin: 1em;
  background: #735D78;
`;

const AboutParagraph = styled.p`
font-size: 25px;
font-family:'Lato', sans-serif;
text-align: left;
line-height: 30px;
weight: 400;
margin: 0px;
color: black;
`;


export default function About() {
    return (
        <div>
            <TitleBox>About Me</TitleBox>
            <AboutWrapper>
                <AboutParagraph>Hi everyone what’s up blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah  </AboutParagraph>
            </AboutWrapper>
            <Divider></Divider>
        </div>
    )
}
