import React from 'react';

import { Spinner } from "reactstrap";
import styled from "styled-components";

const LoaderBlock = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`

const Loader = () => {
    return (
       <LoaderBlock>
           <Spinner style={{ width: '6rem', height: '6rem' }} color="success"/>
       </LoaderBlock>
    )

};

export default Loader;