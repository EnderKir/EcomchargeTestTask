import React from 'react';

import { Alert } from "reactstrap";

const AlertBlock = ({text}) => {
    return (
        <Alert color="danger">
            {text}
        </Alert>
    )

};

export default AlertBlock;