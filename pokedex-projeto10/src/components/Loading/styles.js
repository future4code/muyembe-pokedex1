import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
`

export const Img = styled.img`
    height: 50vh;
    width: 50vh;

@media screen and (min-width: 320px) and (max-width: 800px){
    height: 30vh;
    width: 30vh;
}

@media screen and (min-width: 820px) and (max-width: 1150px){
    height: 35vh;
    width: 35vh;
}

@media screen and (min-width: 1150px) and (max-width: 1500px){
    height: 40vh;
    width: 40vh;
}
`
