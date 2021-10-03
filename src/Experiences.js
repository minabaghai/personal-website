import React from 'react'
import styled from "styled-components";
import codebase_logo from "./codebase_logo.png";
import ipmd_logo from "./ipmd_logo.png";
import ulab_logo from "./ulab_logo.png";
import axios from 'axios';

const TitleBox = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.25em;
margin: 0.5em;
width: 6em;
background: #E8C2CA;
color: #735D78;
font-size: 0.75em;
font-family: 'Lato', sans-serif;
font-weight: bold;
border: 1.75px solid #E8C2CA;
`;

const Divider = styled.section`
  padding: 0.01em;
  margin: 1em;
  background: #735D78;
`;

const ExperiencesWrapper = styled.section`
padding: 1em;
margin: 1em 6em;
background: #D1B3C4;
border: 0.75em solid #B392AC;
`;

const ExperiencesParagraph = styled.p`
font-size: 20px;
font-family:'Lato', sans-serif;
text-align: left;
line-height: 20px;
position: relative;
left: 3px;
bottom: 17px;
weight: 400;
color: black;
`;

const ExperiencesTitle = styled.p`
font-size: 20px;
font-family:'Lato', sans-serif;
font-weight: bold;
text-align: left;
line-height: 10px;
position: relative;
top: 5px;
weight: 400;
color: black;
`;

const ExperienceBox = styled.button`
display: inline-block;
border-radius: 1px;
padding: 0px 10px;
margin: 1em;
width: 15em;
background: #B392AC;
color: black;
font-size: 20px;
font-family: 'Lato', sans-serif;
border: 0.75em solid #D1B3C4;
`;

const ExperienceDiv = styled.div`
background-color: #B392AC;
border: 0.5em solid #D1B3C4;
display: inline-block;
width: 9em;
height: 9em;
margin: 1em;
padding: 5px;
`;


export default function Experiences() {

    const [experiences, setExperiences] = React.useState(null);
    async function fetData() {
        const res = await axios.get(
            'https://api.airtable.com/v0/applJFGJT8IZqbaYR/experiences',
            {
                headers: {
                    authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                },
            }
        );
        console.log(res.data);
        setExperiences(res.data.records);
    }

    React.useEffect(() => {
        fetData();
    }, []);
    if(!experiences) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <TitleBox>Experiences</TitleBox>
            </div>
            <div>
                {experiences.map((record) => (
                    <ExperienceDiv>
                        <div>
                            <img src={record.fields.Logo[0].url} 
                            width={record.fields.Dimensions} height={record.fields.Dimensions}/>
                        </div>
                        <ExperiencesParagraph>
                            <ExperiencesTitle>{record.fields.Title}</ExperiencesTitle>
                            {record.fields.Description}
                        </ExperiencesParagraph>
                    </ExperienceDiv>
                ))
                }
            </div>
            {/* <div>
                <ExperienceDiv>
                    <div className="photos">
                        <img src={codebase_logo} width="75%" height="75%"/>
                    </div>
                    <ExperiencesParagraph>
                        <ExperiencesTitle>Title</ExperiencesTitle>
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                    </ExperiencesParagraph>
                </ExperienceDiv>
                <ExperienceDiv>
                    <div className="photos">
                        <img src={ipmd_logo} width="65%" height="65%"/>
                    </div>
                    <ExperiencesParagraph>
                        <ExperiencesTitle>Title</ExperiencesTitle>
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                    </ExperiencesParagraph>
                </ExperienceDiv>
                <ExperienceDiv>
                    <div className="photos">
                        <img src={ulab_logo} width="60%" height="60%"/>
                    </div>
                    <ExperiencesParagraph>
                        <ExperiencesTitle>Title</ExperiencesTitle>
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                    </ExperiencesParagraph>
                </ExperienceDiv>
            </div> */}
            <Divider></Divider>
        </div>
    )
}


