import styled from 'styled-components'

export const CardImagem = styled.div`
    display: flex;
    justify-content: center;
    min-height: 50px;
    min-width: 50px;
`

export const ImgPokemon = styled.img`
    padding: 1vh;
    height: 15vh;
    width: 15vh;
`

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    margin-top: 2vh;
`

export const ContainerHome = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 7vh;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto;

    @media screen and (min-width: 320px) and (max-width: 800px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7vh;
}

@media screen and (min-width: 820px) and (max-width: 1150px){
    grid-template-columns: auto auto;
    margin-top: 7vh;
}

@media screen and (min-width: 1150px) and (max-width: 1500px){
    grid-template-columns: auto auto auto;
    margin-top: 7vh;
}

@media screen and (min-width: 1500px){
    grid-template-columns: auto auto auto auto;
    margin-top: 7vh;
}
`

export const DivNomeImagem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DivBotoes = styled.div`
    display: flex;
    width: 100%;
    height: 15vh;
    padding-left: 10px;
`

export const DivBottom = styled.div`
    display: flex;
    align-items: space-between;
    padding-bottom: 10px;
`

export const DivType = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TypeImage = styled.img`
    width: 4vw;
    height: 10vh;
    margin-left: 20px;

@media screen and (min-width: 320px) and (max-width: 800px){
    width: 10vh;
}
`

