import styled from 'styled-components';

export const DivPicture = styled.div `
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;

        img {
            width: 100px;
            position: absolute;
        }
`

export const DivPicto = styled.div `
    width: 20px;
    height: 20px;
    background: #15484B;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: relative;
    top: 40px;
    left: 30px;
`

export const DivAll = styled.div `
    width: 100vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Name = styled.h1 `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #EBEBEB;
`

export const DivFond = styled.div `
    width: 240px;
    height: 40px;
    border-radius: 10px;
    background: #15484B;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const Bio = styled.h1 `
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #EBEBEB;
`

export const Fond = styled.h1 `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.05em;
    color: rgba(235, 235, 235, 0.7);
    margin: 20px 0 30px 0;
`

export const DivAchat = styled.div `
    display: flex;
    align-items: center;
`

export const Price = styled.h1 `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #EBEBEB;
    margin-right: 5px;
`

export const Buy = styled.h1 `
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #EBEBEB;
    margin-left: 15px;
`
