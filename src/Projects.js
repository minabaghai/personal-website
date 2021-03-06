import React from 'react'
import styled from "styled-components";
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

const ProjectsDiv = styled.div`
background-color: #D1B3C4;
border: 0.5em solid #B392AC;
display: inline-block;
width: 13em;
height: 9em;
padding: 5px;
margin-top: 1em;
margin-bottom: 0.5em;
`;

const ProjectsParagraph = styled.p`
font-size: 20px;
font-family:'Lato', sans-serif;
text-align: center;
line-height: 25px;
weight: 400;
color: black;
`;

const ProjectsTitle = styled.p`
font-size: 30px;
font-family:'Lato', sans-serif;
font-weight: bold;
text-align: center;
line-height: 10px;
weight: 400;
color: black;
`;

export default function Projects() {
    
    const [projects, setProjects] = React.useState(null);
    async function fetData() {
        const res = await axios.get(
            'https://api.airtable.com/v0/applJFGJT8IZqbaYR/projects',
            {
                headers: {
                    authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                },
            }
        );
        console.log(res.data);
        setProjects(res.data.records);
    }

    React.useEffect(() => {
        fetData();
    }, []);
    if(!projects) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <div>
                <TitleBox>Projects</TitleBox>
                <div>
                    {projects.map((record) => (
                        <ProjectsDiv>
                            <ProjectsParagraph>
                                <ProjectsTitle>{record.fields.Title}</ProjectsTitle>
                                {record.fields.Description}
                            </ProjectsParagraph>
                        </ProjectsDiv>
                    ))
                    }
                </div>
                {/* <div>
                <ProjectsDiv>
                    <ProjectsParagraph>
                        <ProjectsTitle>Title</ProjectsTitle>
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                    </ProjectsParagraph>
                </ProjectsDiv>
                <ProjectsDiv>
                    <ProjectsParagraph>
                        <ProjectsTitle>Title</ProjectsTitle>
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                        hello hello hello hello hello hello
                    </ProjectsParagraph>
                </ProjectsDiv>
                </div> */}
                <Divider></Divider>
            </div>
        </div>
    )
}
