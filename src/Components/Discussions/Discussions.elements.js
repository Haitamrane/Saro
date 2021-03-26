import styled, { css } from 'styled-components';

export const DivDiscussions = styled.div `
    display: flex;
    widht: 100vw;
    height: 70px;
    justify-content: center;
    align-items: center;

    img {
        width: 35px;
        margin-right: 15px;
    }

    :nth-last-child(2) {
        margin-bottom: 130px;
    }
`

export const Flex = styled.div `
    display: flex;
    justify-content: space-between;
`

export const DIVO = styled.div `
    display: flex;
    flex-direction: column;
    width: 80vw;
`

export const Name = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #EBEBEB;
    margin-bottom: 5px;

    ${props => props.namevu && css`
    font-weight: normal;
  `}
`

export const Msg = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #EBEBEB;

    ${props => props.namevu && css`
    font-weight: normal;
    color: rgba(235, 235, 235, 0.5);
  `}
`

export const Info = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: rgba(235, 235, 235, 0.5);

    ${props => props.namevu && css`
    font-weight: normal;
  `}
`