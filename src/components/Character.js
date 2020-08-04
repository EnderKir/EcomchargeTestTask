import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { withRouter } from "react-router";

import moment from 'moment';

import {getCurrent, showLoader} from "../actions/actions";

import Loader from "./Loader";

import styled from "styled-components";

const CharacterPage = styled.div`
    display: flex;
    justify-content: center;
`

const CharacterBlock = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    margin-top: 20px;
`

const PictureContainer = styled.div`
    display: flex;
`

const CharacterName = styled.h1`
    color: blue;
    margin-left: 10px;
    font-style: italic;
    padding: 5px;
    font-size: 30px;
    text-shadow: -5px 5px 0px #00e6e6,
                 -10px 10px 0px #01cccc,
                 -15px 15px 0px #00bdbd;
`

const InfoBlock = styled.div`
    
`

const Character = ({ match }) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.app.loading);
    useEffect(() => {
        dispatch(showLoader());
        setTimeout(() => {
            dispatch(getCurrent(match.params.id));
        }, 500);
    }, [dispatch, match.params.id]);

    const currentCharacter = useSelector(state => state.data.currentCharacter);
    if (loading) {
        return <Loader/>
    }

    if (Object.keys(currentCharacter).length !== 0) {
        return (
            <CharacterPage>
                <CharacterBlock>
                    <CharacterName>{currentCharacter.name}</CharacterName>
                    <PictureContainer>
                        <img src={`${currentCharacter.image}`} alt="Logo"/>
                    </PictureContainer>
                    <InfoBlock>Gender: {currentCharacter.gender}</InfoBlock>
                    <InfoBlock>Species: {currentCharacter.species}</InfoBlock>
                    <InfoBlock>Status: {currentCharacter.status}</InfoBlock>
                    <InfoBlock>Location: {currentCharacter.location.name}</InfoBlock>
                    <InfoBlock>Created: {moment(currentCharacter.created).format("YYYY MM DD")}</InfoBlock>
                </CharacterBlock>
            </CharacterPage>

        )
    }
    return <div></div>
};

const CharacterWithRouter = withRouter(Character)
export default CharacterWithRouter;