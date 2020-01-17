import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../lib/image/logo/instagram-2.svg';
import homePhone from '../../lib/image/homepage/home-phones.png';
import screenshot from '../../lib/image/homepage/screenshot5.jpg';

/**
 * 회원가입/로그인 페이지 레이아웃
 */
const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(var(--b3f,250,250,250),1);
`;

const MainBox = styled.div`
    justify-content: center;
    margin: 30px auto 0;
    max-width: 935px;
    padding-bottom: 44px;
    width: 100%;
    display: flex;
`;

const PhoneBox = styled.div`
    align-self: center;
    background-image: url(${homePhone});
    background-position: 0 0;
    background-size: 454px 618px;
    flex-basis: 454px;
    height: 618px;
    margin-left: -35px;
    margin-right: -15px;
`;

const PhoneImageBox = styled.div`
    margin: 99px 0 0 151px;
    position: relative;
`;

const ScreenShot = styled.img`
    height: 427px;
    left: 0;
    position: absolute;
    top: 0;
    width: 240px;
`;

const RightBox = styled.div`
    justify-content: center;
    margin-top: 12px;
    max-width: 350px;
    width: 100%;
`;

const RegisterBox = styled.div`
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
`;

const Logo = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${logo});
    height: 51px;
    width: 175px;
    margin: 22px auto 12px;
`;

const LoginBox = styled.div`
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
`;

const LoginBoxTitle = styled.p`
    color: #262626;
    font-size: 14px;
    margin: 15px;
    text-align: center;
`;

const AuthTemplate = ({ children }) => {
  const { type } = children.props;

  return (
    <AuthTemplateBlock>
      <MainBox>
        {type === 'register' && (
          <PhoneBox>
            <PhoneImageBox>
              <ScreenShot src={screenshot}></ScreenShot>
            </PhoneImageBox>
          </PhoneBox>
        )}
        <RightBox>
          <RegisterBox>
            <Logo></Logo>
            {children}
          </RegisterBox>

          {type === 'register' ? (
            <LoginBox>
              <LoginBoxTitle>
                계정이 있으신가요?
              <Link to="/#">로그인</Link>
              </LoginBoxTitle>
            </LoginBox>
          ) : (
              <LoginBox>
                <LoginBoxTitle>
                  계정이 없으신가요?
              <Link to="/#">가입하기</Link>
                </LoginBoxTitle>
              </LoginBox>
            )}
        </RightBox>
      </MainBox>
    </AuthTemplateBlock>
  );
}

export default AuthTemplate;
