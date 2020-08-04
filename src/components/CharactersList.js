import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";

import styled from "styled-components";

import {fetchData, showLoader} from "../actions/actions";
import Loader from "./Loader";

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
    const dispatch = useDispatch();
    const loading = useSelector(state => state.app.loading);

    useEffect(() => {
        dispatch(showLoader());
        setTimeout(() => {
            dispatch(fetchData());
        }, 500);
    }, [dispatch]);

    const handleScroll = (e) => {
        const target = e.target;
        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            console.log("AAAAAAAAA");
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
    })

    const characters = useSelector(state => state.data.fetchedData);
    const charactersList = characters.map(el =>
        <li key={el.id}>
            <StyledLink to={{pathname: `characters/${el.id}`}}>{el.name}</StyledLink>
        </li>
    );

    if (loading) {
        return <Loader/>
    }

    if (characters.length > 0) {
        return (
            <ul onScroll={handleScroll}>{charactersList}</ul>
        )
    }

    return <div></div>
};

export default CharactersList;