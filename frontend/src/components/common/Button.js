import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    ${props => props.blue && css`
        background-color: #3897f0;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #fff;`
    }
    ${props => props.none && css`
        background-color: #fff;
        border: 0;
        color: #3897f0;`
    }
    position: relative;
    cursor: pointer;
    display: block;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    padding: 5px 9px;
    text-align: center;
    text-transform: inherit; 
    user-select: none;
    width: auto;
    margin-bottom: 10px;
    margin-top: 10px;
`;

const Button = props => <StyledButton {...props} />;

export default Button;