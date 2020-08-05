import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";

import styled from "styled-components";

import Loader from "./Loader";
import AlertBlock from "./Alert";

const StyledLink = styled(Link)`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;

const CharactersList = () => {
    const loading = useSelector(state => state.app.loading);
    const characters = useSelector(state => state.data.fetchedData);
    const alert = useSelector(state => state.app.alert);

    const charactersList = characters.map(el =>
        <li key={el.id}>
            <StyledLink to={{pathname: `characters/${el.id}`}}>{el.name}</StyledLink>
        </li>
    );

    if (alert) {
        return <AlertBlock text={alert}/>
    }

    if (characters.length > 0) {
        return (
            <ul>{charactersList}</ul>
        )
    }

    if (loading) {
        return <Loader/>
    }

    return <div></div>
};

export default CharactersList;