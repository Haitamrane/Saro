import styled, { css } from 'styled-components';

export const DivJeu = styled.div `
    display: flex;
    widht: 100vw;
    height: 80px;
    background: #15484B;
    justify-content: center;
    align-items: center;

    ${props => props.primary && css`
    background: none;
  `}

    img {
        width: 35px;
        margin-right: 15px;
    }

    :nth-last-child(3) {
        margin-bottom: 190px;
    }
`

export const DIVO = styled.div `
    display: flex;
    flex-direction: column;
    width: 80vw;
`

export const Flex = styled.div `
    display: flex;
    justify-content: space-between;
`

export const Title = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #EBEBEB;
    margin-bottom: 5px;
`

export const Info = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: rgba(235, 235, 235, 0.5);
    margin-bottom: 5px;
`

export const Other = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: rgba(235, 235, 235, 0.5);
`