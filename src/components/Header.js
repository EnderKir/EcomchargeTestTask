import React from 'react';

import styled from "styled-components";

const HeaderBlock = styled.div`
    display: flex;
    justify-content: center;
    background-color: #7FFFD4;
`

const Label = styled.h1`
    color: white;
    font-style: italic;
    padding: 20px;
    font-size: 50px;
    text-shadow: -5px 5px 0px #00e6e6,
                 -10px 10px 0px #01cccc,
                 -15px 15px 0px #00bdbd;
`

const Header = () => {
    return (
        <HeaderBlock>
            <Label>Rick & Morty</Label>
        </HeaderBlock>
    )
};

export default Header;