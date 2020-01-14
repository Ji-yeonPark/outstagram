import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 1px solid transparent;
    background-color: rgba(var(--h5f,56,151,240),1);
    border-radius: 4px;
    color: rgba(var(--eca,255,255,255),1);
    position: relative;
    cursor: pointer;
    display: block;
    font-weight: 600;
    padding: 5px 9px;
    text-align: center;
    text-transform: inherit; 
    user-select: none;
    width: auto;
`;

const Button = props => <StyledButton {...props} />;

export default Button;