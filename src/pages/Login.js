import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import LoginImg from '../images/login-img.svg'

const Login = () => {
    return (
        <Wrapper>
            <div className="container">
                <img src={LoginImg} alt="github user"></img>
                <h1>Github User</h1>
                <button className="btn">Login</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;


export default Login;