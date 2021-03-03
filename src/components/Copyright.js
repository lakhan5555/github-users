import React from 'react';
import styled from 'styled-components';

function Copyright() {
    return (
        <Wrapper>
        <div>
            <h4>Copyright © 2021 Ram Lakhan Singh All Right Reserved</h4>
        </div>
        </Wrapper>
    )
}


const Wrapper = styled.footer` 
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 0;
  padding: 1.5rem;
  background: var(--clr-white);
  text-align: center;
`;

export default Copyright;
