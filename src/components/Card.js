import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';


const Card = () => {

    const {githubUser} = React.useContext(GithubContext);
    const {
        avatar_url,
        html_url,
        name,
        company,
        blog,
        bio,
        location,
        login
    } = githubUser;

    return (
        <Wrapper>
          <h3>User</h3>
          <hr></hr>
          <br></br>
            <header>
                <img src={avatar_url} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>@{login || 'lakhan'}</p>   {/* if twitter_username is null then default = 'lakhan */}
                </div>
                <a target="_blank" href={html_url}>Follow</a>
                
            </header>
            <p>{bio}</p>
            <div>
                <p>
                    <MdBusiness></MdBusiness> {company || 'No Company'}
                </p>
                <p>
                    <MdLocationOn></MdLocationOn> {location  || 'Earth'}
                </p>
                <a href={`http://${blog}`}><MdLink></MdLink> {blog || 'No Blog or Portfolio'}</a>
            </div>
        </Wrapper>
    )
};


const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  
  h3 {
    text-align: center;
    font-weight: 600;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;