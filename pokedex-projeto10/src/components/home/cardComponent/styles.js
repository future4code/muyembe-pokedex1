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
    margin: 2vh;
`

export const ContainerHome = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 7vh;

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
}
`

export const DivNomeImagem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
`

export const DivBotoes = styled.div`
    display: flex;
    width: 100%;
    height: 13vh;
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
    width: 10vh;
    height: 10vh;
    margin-left: 20px;
`

export const DivBotoesPagina = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 15vh;
` 

export const BotoesPagina = styled.button`
    height: 5vh;
    width: 5vh;
    margin: 1vh;
    border-radius: 2vh;

:focus {
    color: white;
    background-color: black;
}
` 
