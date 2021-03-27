import styled, {css} from 'styled-components';


export const DivAccept = styled.div `
    display: flex;
    align-items: center;
    padding: 0 17px 0 17px;
    margin-bottom: 30px;
 
    img {
        margin-right: 10px;
        width: 35px;
    }

    :nth-last-child(2) {
        margin-bottom: 130px;
    }
`

export const DivA = styled.div `
    display: flex;
    align-items: center;
    width: 100vw;
    justify-content: space-between;
`
export const DivB = styled.div `
    display: flex;
    flex-direction: column;
    `

export const Name = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #EBEBEB;
    margin-bottom: 5px;
`

export const Send = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: rgba(235, 235, 235, 0.5);
`

export const Statut = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: rgba(235, 235, 235, 0.5);

    ${props => props.add && css`
    color: #EBEBEB;
  `}
`
