import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import Separator from '../../components/common/Separator';

/**
 * 회원가입/로그인 페이지 폼
 */

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 40px;
    padding: 0;
    border: 0;

`;
const SubTitle = styled.h2`
    font-weight: 600;
    line-height: 20px;
    font-size: 17px;
    color: #999;
    text-align: center;
`;

const StyledInput = styled.input`
    border-radius: 3px;
    box-sizing: border-box;
    color: #262626;
    font-size: 14px;
    position: relative;
    margin-bottom: 5px;
    width: 100%;
    border: 1px solid #efefef;
    background: #fafafa;
    height: 36px;
    padding: 9px 0 7px 8px;
`;

const BottomTitle = styled.p`
    color: #999;
    margin: 10px 20px 20px 20px;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
`;

const LinkDiv = styled.div`
    text-align: center;
    a {
        font-size: 12px;
        line-height: 14px;
        margin-top: 12px;
        text-align: center;
        color: #003569;
        text-decoration: none;
    }
`;

const textMap = {
  login: '로그인',
  register: '가입'
}

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <LoginForm>
      {type === 'register' ? (
        <>
          <SubTitle>친구들의 사진과 동영상을 보려면 가입하세요.</SubTitle>
          <Button blue>Facebook으로 로그인</Button>
          <Separator></Separator>
          <StyledInput autoComplete="email" type="email" name="email" placeholder="이메일 주소"></StyledInput>
          <StyledInput autoComplete="first_name" name="first_name" placeholder="성명"></StyledInput>
          <StyledInput autoComplete="username" name="username" placeholder="사용자 이름"></StyledInput>
          <StyledInput autoComplete="password" type="password" name="password" placeholder="비밀번호"></StyledInput>
        </>
      ) : (
          <>
            <StyledInput autoComplete="username" name="username" placeholder="사용자 이름 또는 이메일"></StyledInput>
            <StyledInput autoComplete="password" type="password" name="password" placeholder="비밀번호"></StyledInput>
          </>
        )}
      <Button blue>{text}</Button>
      {type === 'register' ? (
        <BottomTitle>가입하면 Instagram의 <b>약관, 데이터 정책 및 쿠키 정책</b>에 동의하게 됩니다.</BottomTitle>
      ) : (
          <>
            <Separator></Separator>
            <Button none>Facebook으로 로그인</Button>
            <LinkDiv>
              <Link to="/#">비밀번호를 잊으셨나요?</Link>
            </LinkDiv>
          </>
        )}
    </LoginForm>
  );
}

export default AuthForm;
