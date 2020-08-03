import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from "../actions/actions";

// import styled from "styled-components";

// const Button = styled.button`
//   color: ${(props) => (props.primary ? "white" : "palevioletred")};
//   background: ${(props) => (props.primary ? "palevioletred" : "white")};
//   font-size: 20px;
//   margin: 10px;
//   padding: 5px 20px;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

const App = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.fetchedData);
    return (
        <div className="App">
            {console.log(data)}
            <button
                className="btn btn-primary"
                onClick={() => {dispatch(fetchData())
                console.log("aaaa");
                console.log(data);
                }}
            >Загрузить
            </button>
        </div>
    );
}

export default App;
