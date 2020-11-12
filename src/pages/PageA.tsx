import React from 'react'
import './PageA.scss'
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Body = styled.div`
  width:100%;
  height: 200px;
  background-color: blue;
`;

const Footer = styled.div`
  width: 100%;
  height: 300px;
  background-color: red;
`;

const PageA = () => {
  return (
    <div>
      <Title>
        Hello world
      </Title>
      <Body>
        body styled-component
      </Body>
      <Footer>
        footer
      </Footer>
    </div>
  );
}

export default PageA
