import React from 'react';
import { styled } from 'styled-components';


const StyledLoginDiv = styled.div`
    padding: 30px 0 30px 0;     /* 주석 OK */
    background-color: beige;
`;

const Login = () => {
    return (
        <StyledLoginDiv>
            로그인 페이지입니다
        </StyledLoginDiv>
    );
};

export default Login;