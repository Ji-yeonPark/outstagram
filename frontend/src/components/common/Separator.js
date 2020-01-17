import React from 'react';
import styled from 'styled-components';

const SeparatorDiv = styled.div`
    display: flex;
    margin-bottom: 10px;
`;
const SeparatorBar = styled.div`
    height: 1px;
    position: relative;
    top: .45em;
    background-color: #dbdbdb;;
    -webkit-flex-grow: 1;
`;
const SeperatorTitle = styled.div`
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    margin: 0 18px;
    color: rgba(var(--f52,153,153,153),1);
`;


const Separator = () => {
  return (
    <SeparatorDiv>
      <SeparatorBar></SeparatorBar>
      <SeperatorTitle>또는</SeperatorTitle>
      <SeparatorBar></SeparatorBar>
    </SeparatorDiv>
  );
}

export default Separator;
