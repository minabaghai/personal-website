import React from 'react'
import styled from "styled-components";


const StyledButton = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 3rem;
width: 8rem;
background: transparent;
color: #735D78;
font-size: 0.6em;
font-weight: bold;
font-family: 'Lato', sans-serif;
border: 1.75px transparent;
`;

const Wrapper = styled.section`
  padding: 0em;
  background: #E8C2CA;
`;

const TitleWrapper = styled.section`
  padding: 0.5em;
  background: #F7D1CD;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-alight: center;
  color: #735D78;
`;

const Divider = styled.section`
  padding: 0.01em;
  margin: 0.5em;
  background: #735D78;
`;

export default function Header() {
    return (
        <div>
            <Wrapper>
              <a href="https://www.facebook.com/mina.baghai.33" target="_blank">
                <StyledButton > Facebook </StyledButton>
              </a>
              <a href="https://www.instagram.com/minabaghai/" target="_blank">
                <StyledButton > Instagram </StyledButton>
              </a>
              <a href="https://www.linkedin.com/in/minabaghai/" target="_blank">
                <StyledButton > LinkedIn </StyledButton>
              </a>
              <a href="https://github.com/minabaghai" target="_blank">
                <StyledButton > GitHub </StyledButton>
              </a>
            </Wrapper>
            <TitleWrapper>
                <Title>MINA BAGHAI</Title>
            </TitleWrapper>
            <Divider></Divider>
        </div> 
    )
}
