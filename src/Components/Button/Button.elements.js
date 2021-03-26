import styled from 'styled-components';

export const DivButton = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ButtonCo = styled.button `
    width: 250px;
    height: 50px;
    border-radius: 50px;
    background: #15484B;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.05em;  
    color: #EBEBEB;
    border: none;
    outline: none;
    margin-bottom: 30px;

    :active {
        transition: 0.1s;
        background: #EBEBEB;
        color: #15484B;
    }
`

export const SubTitle = styled.h2 `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #EBEBEB;
`
