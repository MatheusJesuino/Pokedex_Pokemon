import React from "react";
import styled from "styled-components";


const HeaderPrincipal = styled.header`
background: #D60606;

  padding: 2em 1em;
  text-align: center;
  color: white;

  h1 {
    margin: 0;
  }
`;

export const Headers = () => {
  return (
    <HeaderPrincipal>
      <h1>Pokédex</h1>
    </HeaderPrincipal>
  );
};
